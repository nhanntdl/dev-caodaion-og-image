# CaoDaiON Dynamic OG Image Generator (Next.js Edition)

This is a standalone, ultra-lightweight Next.js project built to generate dynamic social share (Open Graph) images for the CaoDaiON platform. 

It leverages Vercel's official **ImageResponse** (built on top of **Satori**), running on the high-performance **Vercel Edge Runtime** for instant image generation.

## Project Structure
- `app/api/og/route.jsx`: The Edge API handler that receives `title` parameters and returns the generated PNG.
- `package.json`: Minimal package configuration for Next.js.

## How to Deploy to Vercel (100% Free)

1. **Copy Files to GitHub**:
   - Clean up any old files in your `dev-caodaion-og-image` repository.
   - Copy the `app` folder and `package.json` from this `scratch` directory directly to the **root** of your repository.
   - Push the changes to GitHub.

2. **Configure Vercel**:
   - Go to your Vercel Dashboard for `dev-caodaion-og-image`.
   - Vercel will automatically detect **Next.js** as the Framework Preset. If it doesn't, select "Next.js" manually in the Project Settings.
   - Run a new deployment.

3. **Verify**:
   - Visit: `https://dev-caodaion-og-image-a1uz.vercel.app/api/og?title=Kinh+Thiên+Đạo+Thế+Đạo`
   - It will return the dynamic PNG instantly.
