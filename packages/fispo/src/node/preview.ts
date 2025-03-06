import compression from "compression";
import polka from "polka";
import path, { join } from "path";
import { resolveConfig } from "./config";
import fs from "fs-extra";
import sirv from "sirv";

const DEFAULT_PORT = 4173;

export async function preview({ port }: { port?: number }) {
  const config = await resolveConfig("serve", "production");
  const listenPort = port ?? DEFAULT_PORT;
  const root = join(process.cwd(), config.root);
  const outputDir = path.resolve(root, "build");
  const notFoundPage = fs.readFileSync(
    path.resolve(outputDir, "404.html"),
    "utf-8"
  );
  const compress = compression();

  // 静态资源服务
  const serve = sirv(outputDir, {
    etag: true,
    maxAge: 31536000,
    immutable: true,
    setHeaders(res, pathname) {
      if (pathname.endsWith(".html")) {
        res.setHeader("cache-control", "no-cache");
      }
    },
  });

  const onNoMatch: polka.Options["onNoMatch"] = (_, res) => {
    res.statusCode = 404;
    res.end(notFoundPage);
  };

  polka({ onNoMatch })
    .use(compress, serve)
    .listen(listenPort, (err) => {
      if (err) {
        throw err;
      }
      console.log(
        `> Preview server is running at http://localhost:${listenPort}`
      );
    });
}
