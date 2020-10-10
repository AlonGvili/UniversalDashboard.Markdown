import React from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  javascript,
  json,
  jsx,
  powershell,
  csharp,
} from "react-syntax-highlighter/dist/esm/languages/prism";
import {
  okaidia,
  atomDark,
  darcula,
  vscDarkPlus,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import Loader from "../loader/Loader.js";

SyntaxHighlighter.registerLanguage("powershell", powershell);
SyntaxHighlighter.registerLanguage("jsx", jsx);
SyntaxHighlighter.registerLanguage("json", json);
SyntaxHighlighter.registerLanguage("javascript", javascript);
SyntaxHighlighter.registerLanguage("csharp", csharp);

export default function CodeBlock({
  value,
  showLineNumbers,
  customStyle,
  theme = "vsDark",
  language = "powershell",
}) {
  return (
    <Loader>
      <SyntaxHighlighter
        language={language}
        showLineNumbers={showLineNumbers}
        customStyle={customStyle}
        style={
          theme === "okaidia"
            ? okaidia
            : theme === "atomDark"
            ? atomDark
            : theme === "darcula"
            ? darcula
            : vscDarkPlus
        }
      >
        {value}
      </SyntaxHighlighter>
    </Loader>
  );
}
