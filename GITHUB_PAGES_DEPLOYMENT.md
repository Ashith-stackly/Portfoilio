# Deploying a Next.js Project to GitHub Pages with GitHub Actions

This document records the setup used to deploy this Next.js portfolio to GitHub Pages.

Live site pattern:

```text
https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME/
```

For this project:

```text
https://ashith-stackly.github.io/Portfoilio/
```

## 1. Install Dependencies

From the project folder:

```bash
npm install
```

On Windows PowerShell, if `npm` is blocked by execution policy, use:

```bash
npm.cmd install
```

## 2. Configure Next.js for Static Export

Create or update `next.config.mjs`:

```js
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
```

Why this is needed:

- `output: "export"` generates a static `out` folder for GitHub Pages.
- `basePath` makes assets load correctly under a repository URL like `/Portfoilio`.
- `images.unoptimized` avoids image optimization server requirements, since GitHub Pages is static hosting.

## 3. Add `.nojekyll`

Create this file:

```text
public/.nojekyll
```

This prevents GitHub Pages from processing the site with Jekyll and helps serve `_next` assets correctly.

## 4. Update `.gitignore`

Make sure build folders are ignored:

```gitignore
node_modules
.next
out
```

## 5. Add GitHub Actions Workflow

Create:

```text
.github/workflows/deploy.yml
```

Use this workflow:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - name: Setup Pages
        uses: actions/configure-pages@v5

      - name: Install dependencies
        run: npm ci

      - name: Build static site
        run: npm run build
        env:
          NEXT_PUBLIC_BASE_PATH: /YOUR_REPOSITORY_NAME

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

For this project, the base path is:

```yaml
NEXT_PUBLIC_BASE_PATH: /Portfoilio
```

If the repository is named `username.github.io`, use an empty base path instead:

```yaml
NEXT_PUBLIC_BASE_PATH: ""
```

## 6. Test the Build Locally

For a normal local build:

```bash
npm run build
```

For a GitHub Pages-style build with repository base path:

```bash
NEXT_PUBLIC_BASE_PATH=/YOUR_REPOSITORY_NAME npm run build
```

On Windows PowerShell:

```powershell
$env:NEXT_PUBLIC_BASE_PATH="/YOUR_REPOSITORY_NAME"
npm.cmd run build
Remove-Item Env:NEXT_PUBLIC_BASE_PATH
```

The build should generate:

```text
out/
```

## 7. Push to GitHub

Initialize Git if needed:

```bash
git init -b main
git add .
git commit -m "Initial Next.js portfolio"
```

Add the GitHub remote:

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
```

Push:

```bash
git push -u origin main
```

For this project:

```bash
git remote add origin https://github.com/Ashith-stackly/Portfoilio.git
git push -u origin main
```

## 8. Enable GitHub Pages

In GitHub:

1. Open the repository.
2. Go to `Settings`.
3. Go to `Pages`.
4. Under `Build and deployment`, set `Source` to `GitHub Actions`.
5. Do not configure the suggested Next.js workflow if this custom workflow already exists.
6. Go to the `Actions` tab.
7. Wait for `Deploy to GitHub Pages` to finish successfully.

## 9. Deployment URL

After the workflow succeeds, open:

```text
https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME/
```

For this project:

```text
https://ashith-stackly.github.io/Portfoilio/
```

## Troubleshooting

### Page opens but styles/scripts are missing

Check `NEXT_PUBLIC_BASE_PATH`.

For project pages, it must match the repository name:

```yaml
NEXT_PUBLIC_BASE_PATH: /Portfoilio
```

### GitHub Pages says “Use a suggested workflow”

This is normal before the first successful workflow run. Go to the `Actions` tab and check whether the deployment workflow is running.

### `_next` files return 404

Make sure:

- `public/.nojekyll` exists.
- `next.config.mjs` has `output: "export"`.
- The workflow uploads `./out`.

### Build passes locally but fails in GitHub Actions

Check:

- `package-lock.json` is committed.
- The workflow uses `npm ci`.
- The Node version in the workflow is compatible, usually Node `20`.

### Site works locally but not on GitHub Pages

Run a local base-path build:

```powershell
$env:NEXT_PUBLIC_BASE_PATH="/YOUR_REPOSITORY_NAME"
npm.cmd run build
Remove-Item Env:NEXT_PUBLIC_BASE_PATH
```

Then inspect `out/index.html` and verify asset URLs start with:

```text
/YOUR_REPOSITORY_NAME/_next/
```
