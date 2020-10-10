import React from "react";
import ReactMarkdown from "react-markdown/with-html";

import Root from "./components/root/root.js";

import CodeBlock from "./components/code/code-block.js";

import H1Tag from "./components/heading/h1-heading.js";

import H2Tag from "./components/heading/h2-heading.js";

import H3Tag from "./components/heading/h3-heading.js";

import H4Tag from "./components/heading/h4-heading.js";

import H5Tag from "./components/heading/h5-heading.js";

import H6Tag from "./components/heading/h6-heading.js";

import Blockquote from "./components/blockquote/blockquote.js";

import Image from "./components/image/image.js";

import InlineCode from "./components/code/inline-code.js";

import Paragraph from "./components/paragraph/paragraph.js";

import Table from "./components/table/table.js";

import Thead from "./components/table/thead.js";

import Tbody from "./components/table/tbody.js";

import Trow from "./components/table/trow.js";

import Tcell from "./components/table/tcell.js";

import Hr from "./components/breaks/hr.js";

import Emphasis from "./components/text/em.js";

import Strong from "./components/text/strong.js";

import Delete from "./components/text/delete.js";

import Link from "./components/link/link.js";

import List from "./components/list/list.js";

import ListItem from "./components/list/listitem.js";

import Text from "./components/text/text.js";

export default function UDMarkdown({
  markdown,
  showLineNumbers,
  styles,
  language,
  theme,
  escapeHtml,
}) {
  console.log("styles", styles);
  const {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    blockquote,
    img,
    root,
    codeBlock,
    inlineCode,
    p,
    table,
    hr,
    em,
    strong,
    del,
    link,
    linkReference,
    list,
    text,
  } = styles;

  const { thead, tbody } = table;
  const { trow } = tbody;
  const { td } = trow;
  const { listItem, ol, ul } = list;
  return (
    <ReactMarkdown
      source={markdown}
      escapeHtml={escapeHtml}
      renderers={{
        root: ({ children }) => <Root styles={root}>{children}</Root>,
        code: ({ value }) => {
          return (
            <CodeBlock
              showLineNumbers={showLineNumbers}
              customStyle={codeBlock}
              language={language}
              value={value}
              theme={theme}
            />
          );
        },
        heading: ({ children, level }) => {
          return level == 1 ? (
            <H1Tag styles={h1}>{children}</H1Tag>
          ) : level == 2 ? (
            <H2Tag styles={h2}>{children}</H2Tag>
          ) : level == 3 ? (
            <H3Tag styles={h3}>{children}</H3Tag>
          ) : level == 4 ? (
            <H4Tag styles={h4}>{children}</H4Tag>
          ) : level == 5 ? (
            <H5Tag styles={h5}>{children}</H5Tag>
          ) : (
            <H6Tag styles={h6}>{children}</H6Tag>
          );
        },
        blockquote: ({ children }) => (
          <Blockquote styles={blockquote}>{children}</Blockquote>
        ),
        image: ({ src, alt, title }) => (
          <Image src={src} alt={alt} title={title} styles={img} />
        ),
        inlineCode: ({ children }) => (
          <InlineCode styles={inlineCode}>{children}</InlineCode>
        ),
        paragraph: ({ children }) => (
          <Paragraph styles={p}>{children}</Paragraph>
        ),
        table: ({ children }) => <Table styles={table}>{children}</Table>,
        tableHead: ({ children }) => <Thead styles={thead}>{children}</Thead>,
        tableBody: ({ children }) => <Tbody styles={tbody}>{children}</Tbody>,
        tableRow: ({ children }) => <Trow styles={trow}>{children}</Trow>,
        tableCell: ({ children }) => <Tcell styles={td}>{children}</Tcell>,
        thematicBreak: ({ children }) => <Hr styles={hr}>{children}</Hr>,
        emphasis: ({ children }) => <Emphasis styles={em}>{children}</Emphasis>,
        strong: ({ children }) => <Strong styles={strong}>{children}</Strong>,
        delete: ({ children }) => <Delete styles={del}>{children}</Delete>,
        link: ({ href, children }) => (
          <Link href={href} styles={link}>
            {children}
          </Link>
        ),
        linkReference: ({ href, children }) => (
          <Link href={href} styles={linkReference}>
            {children}
          </Link>
        ),
        list: ({ ordered, children }) => (
          <List isOrdered={ordered} styles={ordered ? ol : ul}>
            {children}
          </List>
        ),
        listItem: ({ children }) => (
          <ListItem styles={listItem}>{children}</ListItem>
        ),
        text: ({ children }) => <Text styles={text}>{children}</Text>,
      }}
    />
  );
}

UniversalDashboard.register("ud-markdown", UDMarkdown);
