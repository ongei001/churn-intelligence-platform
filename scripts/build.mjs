import { copyFile, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";

const root = new URL("../", import.meta.url);
const dist = new URL("../dist/", import.meta.url);
const htmlPath = new URL("../index.html", import.meta.url);
const html = await readFile(htmlPath, "utf8");

await rm(dist, { recursive: true, force: true });
await mkdir(new URL("server/public/", dist), { recursive: true });
await mkdir(new URL("_appgen_meta/", dist), { recursive: true });

await copyFile(htmlPath, new URL("server/public/index.html", dist));
await copyFile(new URL(".openai/hosting.json", root), new URL("_appgen_meta/appgarden.json", dist));

const screenshot = new URL("public/screenshot.jpeg", root);
if (existsSync(screenshot)) {
  await copyFile(screenshot, new URL("server/public/screenshot.jpeg", dist));
}

const worker = `const INDEX_HTML = ${JSON.stringify(html)};

export default {
  async fetch(request) {
    const url = new URL(request.url);
    if (url.pathname === "/" || url.pathname === "/index.html") {
      return new Response(INDEX_HTML, {
        headers: {
          "content-type": "text/html; charset=utf-8",
          "cache-control": "public, max-age=300"
        }
      });
    }

    if (url.pathname === "/health") {
      return new Response("ok", { headers: { "content-type": "text/plain" } });
    }

    return new Response("Not found", { status: 404 });
  }
};
`;

await writeFile(new URL("server/index.js", dist), worker, "utf8");
