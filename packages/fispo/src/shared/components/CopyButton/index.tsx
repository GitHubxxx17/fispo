import styles from "./index.module.scss";
import Icon from "../Icon";
import { useCallback, useState } from "react";

const CopyButton = () => {
  const [isCopy, setIsCopy] = useState(false);

  const handleCopy = useCallback(
    async (e: React.MouseEvent) => {
      if (isCopy) return;
      const target = e.currentTarget;
      const code = target.parentNode.nextSibling.childNodes[0] as HTMLElement;
      const text = code.innerText;
      try {
        await navigator.clipboard.writeText(text);
      } catch {
        // 降级方案：使用 textarea
        const textarea = document.createElement("textarea");
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }
      setIsCopy(true);
      const timer = setTimeout(() => {
        setIsCopy(false);
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    },
    [isCopy]
  );
  return (
    <span
      className={styles["copy-button"]}
      id="copy-button"
      onClick={(e) => handleCopy(e)}
    >
      <Icon
        icon="copy"
        style={{
          display: isCopy ? "none" : "inline-block",
        }}
      />

      <Icon
        icon="check"
        style={{
          display: isCopy ? "inline-block" : "none",
        }}
      />
    </span>
  );
};

export default CopyButton;
