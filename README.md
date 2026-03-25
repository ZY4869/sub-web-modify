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

## Notes

- The app keeps subscription conversion, short-link generation, config upload, and URL parsing.
- Promotional links, social links, tutorial entry points, and external download navigation have been removed.
