import hljs from "highlight.js";
import "@darkTheme";
import "@lightTheme";
import { usePageData } from "@runtime/hooks";
import { useMemo } from "react";
import { inBrowser } from "shared/helper";
import CopyButton from "../CopyButton";

export interface CodeBlockProps {
  code: string;
  language?: string;
}

function CodeBlock({ code, language = "plaintext" }: CodeBlockProps) {
  let renderCode: string;
  const { pageData } = usePageData();

  const curCodeTheme = useMemo(() => {
    const curTheme = pageData.curCodeTheme;
    if (curTheme) {
      return curTheme;
    } else {
      if (!inBrowser()) return "github";

      const classList = document.documentElement.classList;
      const codeHighlight = pageData.siteData.codeHighlight;
      return classList.contains("dark")
        ? codeHighlight.dark
        : codeHighlight.light;
    }
  }, [pageData]);

  try {
    renderCode = hljs.highlight(code, {
      language,
      ignoreIllegals: true,
    }).value;
  } catch (e) {
    console.log("CodeBlock: ", e);
    renderCode = hljs.highlight(code, {
      language: "plaintext",
      ignoreIllegals: true,
    }).value;
  }

  return (
    <div className={`hljs theme-${curCodeTheme} language-${language}`}>
      <div className="highlight-tools">
        <span className="lang">{language}</span>
        <CopyButton />
      </div>
      <pre>
        <code
          className={`hljs language-${language}`}
          dangerouslySetInnerHTML={{ __html: renderCode }}
        ></code>
      </pre>
    </div>
  );
}

export default CodeBlock;
