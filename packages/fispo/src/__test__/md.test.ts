import { unified } from "unified";
import { describe, test, expect } from "vitest";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import { rehypePluginHighlight } from "../node/plugins/plugin-mdx/rehypePlugins/highlight";
import { remarkPluginToc } from "../node/plugins/plugin-mdx/remarkPlugins/toc";
import remarkMdx from "remark-mdx";
import remarkStringify from "remark-stringify";

describe("Markdown compile cases", async () => {
  // 初始化 processor
  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypePluginHighlight)
    .use(rehypeStringify);

  test("Compile title", async () => {
    const mdContent = "# 123";
    const result = await processor.process(mdContent);
    expect(result.value).toMatchInlineSnapshot(`"<h1>123</h1>"`);
  });

  test("Compile code", async () => {
    const mdContent = "I am using `Island.js`";
    const result = await processor.process(mdContent);
    expect(result.value).toMatchInlineSnapshot(
      `"<p>I am using <code>Island.js</code></p>"`
    );
  });

  test("Compile code block", async () => {
    const mdContent = "```js\nconsole.log(123);\n```";
    const result = await processor.process(mdContent);
    expect(result.value).toMatchInlineSnapshot(`
      "<CodeBlock code="console.log(123);
      " language="js"></CodeBlock>"
    `);
  });

  test("Compile TOC", async () => {
    const mdContent = `# h1

## h2 \`code\`

### h3 [link](https://islandjs.dev)

#### h4

##### h5
`;
    const remarkProcessor = unified()
      .use(remarkParse)
      .use(remarkMdx)
      .use(remarkPluginToc)
      .use(remarkStringify);

    const result = remarkProcessor.processSync(mdContent);
    expect(result.value.toString().replace(mdContent, ""))
      .toMatchInlineSnapshot(`
      "
      export const toc = [
        {
          "id": "h1",
          "text": "h1",
          "depth": 1
        },
        {
          "id": "h2-code",
          "text": "h2 code",
          "depth": 2
        },
        {
          "id": "h3-link",
          "text": "h3 link",
          "depth": 3
        },
        {
          "id": "h4",
          "text": "h4",
          "depth": 4
        },
        {
          "id": "h5",
          "text": "h5",
          "depth": 5
        }
      ];
      "
    `);
  });
});
