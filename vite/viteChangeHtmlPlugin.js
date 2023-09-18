import * as fs from "fs";
import { resolve } from "path";
import { rollup } from "rollup";
import { terser } from "rollup-plugin-terser";

export default function viteModifyHtmlPlugin(options = {}) {
  return {
    name: "viteModifyHtmlPlugin",

    async transformIndexHtml(html) {
      const script = await getScript(options.script);
      const style = getStyle(options.style);

      return html
        .replace(
          "<!-- VITE_MODIFY_HTML--SCRIPT_PLACEHOLDER -->",
          `<script>${script}</script>`
        )
        .replace(
          "<!-- VITE_MODIFY_HTML--STYLE_PLACEHOLDER -->",
          `<style>${style}</style>`
        );
    },
  };
}

async function getScript(dir) {
  if (dir) {
    const bundle = await rollup({
      input: `${dir}/index.js`,
      plugins: [terser()],
    });
    const { output } = await bundle.generate({
      format: "iife",
    });
    return output[0].code;
  }
  return null;
}

function getStyle(dir) {
  if (dir) {
    const stylesDir = resolve(dir);
    return fs.readFileSync(`${stylesDir}/style.css`, { encoding: "utf-8" });
  }
  return null;
}
