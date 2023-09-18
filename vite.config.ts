import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import viteChangeHtmlPlugin from "./vite/viteChangeHtmlPlugin.js";

export default defineConfig({
  plugins: [
    viteChangeHtmlPlugin({
      script: "static/scripts",
      style: "static/styles",
    }),
    vue(),
  ],
  define: {
    _I18N_PATH_: JSON.stringify("/i18n/"),
  },
});
