import { ConfigEnv, defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv) => {
  const isProduction = mode === "production";
  return {
    plugins: [
      react(),
      VitePWA({
        registerType: "autoUpdate",
        manifestFilename: "manifest.json",
        includeAssets: ["**/*.{js,css,html,ico,png,svg,jpg,jpeg}"], // For precaching files under publidDir only
        manifest: {
          id: "vinhs-custom-wallcovering",
          short_name: "Vinh's Custom Wallcovering",
          name: "Vinh's Custom Wallcovering",
          description:
            "Vinh Nguyen is a seasoned professional wallpaper installer with over four decades of experience in the art of wallcovering in the DFW area. Get an estimate today!",
          icons: [
            {
              src: "assets/manifest-icon-192.maskable.png",
              sizes: "192x192",
              type: "image/png",
              purpose: "any",
            },
            {
              src: "assets/manifest-icon-192.maskable.png",
              sizes: "192x192",
              type: "image/png",
              purpose: "maskable",
            },
            {
              src: "assets/manifest-icon-512.maskable.png",
              sizes: "512x512",
              type: "image/png",
              purpose: "any",
            },
            {
              src: "assets/manifest-icon-512.maskable.png",
              sizes: "512x512",
              type: "image/png",
              purpose: "maskable",
            },
          ],
          start_url: "/",
          scope: "/",
          lang: "en",
          display: "standalone",
          theme_color: "#393E46",
          background_color: "#EEEEEE",
        },
      }),
    ],
    publicDir: "public",
    build: {
      sourcemap: !isProduction,
      outDir: "dist",
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "@components": path.resolve(__dirname, "./src/components"),
        "@pages": path.resolve(__dirname, "./src/pages"),
      },
    },
  };
});
