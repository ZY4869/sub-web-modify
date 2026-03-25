#!/usr/bin/env bash
set -euo pipefail

IMAGE="${IMAGE:-metacubex/subconverter:latest}"
CONTAINER_NAME="${CONTAINER_NAME:-modern-subconverter}"
PORT="${PORT:-7074}"

docker rm -f "$CONTAINER_NAME" >/dev/null 2>&1 || true
docker pull "$IMAGE"
docker run -d --restart=always --name "$CONTAINER_NAME" -p "${PORT}:25500" "$IMAGE"

echo "subconverter is starting on port ${PORT}"
echo "health check:"
curl "http://127.0.0.1:${PORT}/version"
