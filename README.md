#

## on Vercel

```bash
$ curl -o /dev/null -s -w 'Total: %{time_total}s\n' "$VERCEL_DEPLOY_URL/api/api-app-segment-config"
$ curl -o /dev/null -s -w 'Total: %{time_total}s\n' "$VERCEL_DEPLOY_URL/api/api-app-conflicting-config"
$ curl -o /dev/null -s -w 'Total: %{time_total}s\n' "$VERCEL_DEPLOY_URL/api/api-pages-segment-config"
$ curl -o /dev/null -s -w 'Total: %{time_total}s\n' "$VERCEL_DEPLOY_URL/api/api-pages-conflicting-config"
```

## local

```bash
$ pnpm i
$ pnpm build
$ pnpm start
$ curl -o /dev/null -s -w 'Total: %{time_total}s\n' localhost:3000/api/api-app-segment-config
$ curl -o /dev/null -s -w 'Total: %{time_total}s\n' localhost:3000/api/api-pages-segment-config
```
