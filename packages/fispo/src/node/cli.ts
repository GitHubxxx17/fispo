import { cac } from "cac";
import { build } from "./build";
import { resolveConfig } from "./config";

const version = require("../../package.json").version;

const cli = cac("fispo").version(version).help();

cli.command("dev", "start dev server").action(async () => {
  const createServer = async () => {
    const { createDevServer } = await import("./dev.js");
    const server = await createDevServer(async () => {
      await server.close();
      await createServer();
    });
    await server.listen();
    server.printUrls();
  };
  await createServer();
});

cli.command("build", "build for production").action(async () => {
  try {
    const config = await resolveConfig("build", "production");
    await build(config.root, config);
  } catch (e) {
    console.log(e);
  }
});

cli.parse();
