# Next.js to GitHub Pages Deployment Guide

This is a simple from-scratch guide for deploying a Next.js project to GitHub Pages using GitHub Actions.

Example final URL:

```text
https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME/
```

For this project:

```text
https://ashith-stackly.github.io/Portfoilio/
```

## What Files Need to Be Added or Changed?

After creating your Next.js project, you mainly need these files:

```text
next.config.mjs
public/.nojekyll
.github/workflows/deploy.yml
.gitignore
```

You also need to push the project to GitHub and enable GitHub Pages from repository settings.

## Step 1: Create or Open Your Next.js Project

If you are creating a new project:

```bash
npx create-next-app@latest my-portfolio
cd my-portfolio
```

If you already have a project, open that project folder.

Install dependencies:

```bash
npm install
```

On Windows PowerShell, if `npm` is blocked, use:

```bash
npm.cmd install
```

## Step 2: Add `next.config.mjs`

Create this file in the project root:

```text
next.config.mjs
```

Add this code:

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

Why this file is needed:

- `output: "export"` creates a static `out` folder.
- GitHub Pages can host only static files.
- `basePath` fixes CSS and JS paths when your site is hosted inside a repo path.
- `images.unoptimized` is needed because GitHub Pages does not run a Next.js image server.

## Step 3: Add `.nojekyll`

Create this empty file:

```text
public/.nojekyll
```

No code is needed inside it.

Why this file is needed:

GitHub Pages sometimes treats static sites as Jekyll sites. This file tells GitHub Pages not to do that, so `_next` files work correctly.

## Step 4: Update `.gitignore`

Open:

```text
.gitignore
```

Make sure these lines exist:

```gitignore
node_modules
.next
out
```

Why this is needed:

- `node_modules` should not be pushed.
- `.next` is a local build folder.
- `out` is generated during deployment.

## Step 5: Add GitHub Actions Workflow

Create this folder and file:

```text
.github/workflows/deploy.yml
```

Add this code:

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

Very important:

Replace this:

```yaml
NEXT_PUBLIC_BASE_PATH: /YOUR_REPOSITORY_NAME
```

With your GitHub repository name.

For this project:

```yaml
NEXT_PUBLIC_BASE_PATH: /Portfoilio
```

If your repository name is:

```text
my-portfolio
```

Then use:

```yaml
NEXT_PUBLIC_BASE_PATH: /my-portfolio
```

If your repository is a special GitHub Pages repository like:

```text
username.github.io
```

Then use an empty value:

```yaml
NEXT_PUBLIC_BASE_PATH: ""
```

## Step 6: Test Build Locally

Normal build:

```bash
npm run build
```

On Windows:

```bash
npm.cmd run build
```

Test with GitHub Pages base path:

```powershell
$env:NEXT_PUBLIC_BASE_PATH="/YOUR_REPOSITORY_NAME"
npm.cmd run build
Remove-Item Env:NEXT_PUBLIC_BASE_PATH
```

For this project:

```powershell
$env:NEXT_PUBLIC_BASE_PATH="/Portfoilio"
npm.cmd run build
Remove-Item Env:NEXT_PUBLIC_BASE_PATH
```

After build, you should see this folder:

```text
out/
```

## Step 7: Push Code to GitHub

Initialize Git:

```bash
git init -b main
```

Add files:

```bash
git add .
```

Commit:

```bash
git commit -m "Initial Next.js deployment"
```

Add your GitHub repo:

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

## Step 8: Enable GitHub Pages

Go to GitHub.

Open your repository.

Then:

1. Go to `Settings`.
2. Click `Pages`.
3. Under `Build and deployment`, select `GitHub Actions`.
4. Do not click the suggested `Configure` button if you already added `.github/workflows/deploy.yml`.
5. Go to the `Actions` tab.
6. Wait for `Deploy to GitHub Pages` to become green.

## Step 9: Open Your Website

Use this URL format:

```text
https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME/
```

For this project:

```text
https://ashith-stackly.github.io/Portfoilio/
```

## Quick Summary

Files to add or edit:

```text
next.config.mjs
public/.nojekyll
.github/workflows/deploy.yml
.gitignore
```

Commands:

```bash
npm install
npm run build
git init -b main
git add .
git commit -m "Initial Next.js deployment"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
git push -u origin main
```

GitHub setting:

```text
Settings > Pages > Source > GitHub Actions
```

## Common Problems and Fixes

### 1. Page opens but CSS is missing

Problem:

`NEXT_PUBLIC_BASE_PATH` is wrong.

Fix:

Use your exact repository name:

```yaml
NEXT_PUBLIC_BASE_PATH: /YOUR_REPOSITORY_NAME
```

For this project:

```yaml
NEXT_PUBLIC_BASE_PATH: /Portfoilio
```

### 2. Site shows 404

Check:

- GitHub Actions deployment finished successfully.
- GitHub Pages source is set to `GitHub Actions`.
- You are opening the correct URL.

Correct URL format:

```text
https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME/
```

### 3. `_next` files show 404

Check:

- `public/.nojekyll` exists.
- `next.config.mjs` has `output: "export"`.
- Workflow uploads `./out`.

### 4. GitHub Actions build fails

Check:

- `package-lock.json` is pushed.
- Workflow uses `npm ci`.
- Node version is `20`.

### 5. Pages settings still show suggested workflows

That is normal before the first successful deployment.

Go to:

```text
Actions > Deploy to GitHub Pages
```

Wait for the workflow to complete.
