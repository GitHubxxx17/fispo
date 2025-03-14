import path, { dirname } from "path";
import fse from "fs-extra";
import { execaCommandSync } from "execa";

import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const exampleDir = path.resolve(__dirname, "../e2e/playground/basic");
const defaultExecaOpts = {
  cwd: exampleDir,
  stdout: process.stdout,
  stdin: process.stdin,
  stderr: process.stderr,
};

async function prepareE2E() {
  // ensure after build
  if (!fse.existsSync(path.resolve(__dirname, "../dist"))) {
    // exec build command
    execaCommandSync("pnpm build", {
      cwd: path.resolve(__dirname, "../"),
    });
  }

  execaCommandSync("npx playwright install", {
    cwd: path.join(__dirname, "../"),
    stdout: process.stdout,
    stdin: process.stdin,
    stderr: process.stderr,
  });

  execaCommandSync("pnpm i", {
    cwd: exampleDir,
    stdout: process.stdout,
    stdin: process.stdin,
    stderr: process.stderr,
  });

  // exec dev command
  execaCommandSync("pnpm dev", defaultExecaOpts);
}

prepareE2E();
