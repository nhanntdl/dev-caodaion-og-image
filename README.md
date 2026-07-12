# CaoDaiON Dynamic OG Image Generator

This is a standalone, lightweight serverless project powered by [Vercel OG](https://vercel.com/docs/functions/og-image-generation) (built on Satori). It dynamically generates beautiful, customized Social Share (Open Graph) images for all pages on the CaoDaiON platform on the fly.

## Project Structure
- `api/og.js`: The serverless function that renders HTML/CSS into a PNG image. It uses Node.js runtime, uses `React.createElement` instead of JSX to avoid transpilation errors, and streams the image response directly.
- `package.json`: Project manifest (includes `"type": "module"` and dependencies for `@vercel/og` and `react`).

## How to Deploy to Vercel (100% Free)

1. **Upload to GitHub**:
   - Push the `api` folder and `package.json` file inside this directory directly to the **root** of your `dev-caodaion-og-image` repository.
   - Do NOT place them inside a subfolder like `caodaion-og-image`.

2. **Deploy on Vercel**:
   - Vercel will automatically redeploy the new commit and recognize the root `package.json`.
   - The `/api/og` endpoint will be built and launched instantly.

3. **Get Your API URL**:
   - Test it by visiting:
     `https://dev-caodaion-og-image-a1uz.vercel.app/api/og?title=Kinh+Thiên+Đạo+Thế+Đạo`
