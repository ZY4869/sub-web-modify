const NO_NODES_PATTERNS = [
  /no nodes were found!?/i,
  /the following link doesn't contain any valid protocol nodes/i,
  /failed to parse subscription/i,
];

export function isLegacyBackendVersion(version = "") {
  return /v1\.9\.9/i.test(version);
}

export function shouldProbeGeneratedSubscription(clientType, version = "") {
  return clientType === "quanx" || isLegacyBackendVersion(version);
}

export function looksLikeBrokenSubscription(text = "") {
  const normalized = text.trim();
  if (!normalized) {
    return true;
  }

  return NO_NODES_PATTERNS.some((pattern) => pattern.test(normalized));
}

export function createCompatibilityNotice(version = "") {
  if (!isLegacyBackendVersion(version)) {
    return null;
  }

  const versionLabel = version
    ? ` (${version})`
    : "";

  return {
    title: `\u540e\u7aef\u517c\u5bb9\u6027\u63d0\u793a${versionLabel}`,
    description:
      "\u68c0\u6d4b\u5230\u5f53\u524d `/sub` \u540e\u7aef\u7248\u672c\u504f\u65e7\uff0c" +
      "\u9047\u5230 VLESS Reality / xtls-rprx-vision \u7c7b\u8ba2\u9605\u65f6\uff0c" +
      "\u53ef\u80fd\u76f4\u63a5\u8fd4\u56de `No nodes were found!`\u3002" +
      "\u5efa\u8bae\u53ea\u66f4\u6362\u8f6c\u6362\u540e\u7aef\u5230 MetaCubeX/subconverter \u65b0\u7248\u3002",
  };
}

export function createProbeFailureMessage({
  backend = "",
  version = "",
}) {
  const details = [
    "\u5f53\u524d\u8f6c\u6362\u540e\u7aef\u672a\u80fd\u89e3\u6790\u8be5\u8ba2\u9605\uff0c" +
      "\u8fd9\u79cd\u60c5\u51b5\u5728\u65e7\u7248 subconverter \u5904\u7406 VLESS Reality / xtls-rprx-vision \u8282\u70b9\u65f6\u6bd4\u8f83\u5e38\u89c1\u3002",
  ];

  if (version) {
    details.push(`\u5f53\u524d\u540e\u7aef\u7248\u672c\uff1a${version}`);
  }

  if (backend) {
    details.push(`\u5f53\u524d\u540e\u7aef\u5730\u5740\uff1a${backend}`);
  }

  details.push(
    "\u8bf7\u5347\u7ea7 `/sub` \u540e\u7aef\u5230 MetaCubeX/subconverter \u65b0\u7248\uff0c" +
      "\u6216\u5207\u6362\u5230\u652f\u6301 Reality \u7684\u8f6c\u6362\u540e\u7aef\u540e\u518d\u751f\u6210 Quantumult X \u94fe\u63a5\u3002"
  );

  return details.join("\n\n");
}
