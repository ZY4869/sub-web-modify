# sub-web-modify

A cleaned-up web UI for subscription conversion.

## Development

Install dependencies:

```bash
yarn
```

Start the dev server:

```bash
yarn serve
```

Build for production:

```bash
yarn build
```

## Configuration

Runtime backends are configured through `.env`:

- `VUE_APP_SUBCONVERTER_DEFAULT_BACKEND`
- `VUE_APP_MYURLS_DEFAULT_BACKEND`
- `VUE_APP_CONFIG_UPLOAD_BACKEND`

## Backend Compatibility

Legacy `subconverter v1.9.9` backends can fail on modern `vless://` subscriptions that use Reality or `xtls-rprx-vision`, and may return `No nodes were found!` for `quanx`, `clash`, or even `v2ray`.

This frontend now warns before copying obviously broken conversion links, but the real fix is to upgrade only the `/sub` backend.

Recommended coexistence deployment:

```bash
PORT=7074 CONTAINER_NAME=modern-subconverter bash scripts/run-modern-subconverter.sh
```

Then point only the converter backend to the new service:

```bash
VUE_APP_SUBCONVERTER_DEFAULT_BACKEND="http://YOUR_HOST:7074"
VUE_APP_MYURLS_DEFAULT_BACKEND="http://YOUR_EXISTING_SHORT_SERVICE"
VUE_APP_CONFIG_UPLOAD_BACKEND="http://YOUR_EXISTING_UPLOAD_SERVICE"
```

If your current backend port is used only for `/sub` and `/version`, you can replace it in place:

```bash
PORT=7073 CONTAINER_NAME=subconverter bash scripts/run-modern-subconverter.sh
```

## Notes

- The app keeps subscription conversion, short-link generation, config upload, and URL parsing.
- Promotional links, social links, tutorial entry points, and external download navigation have been removed.
