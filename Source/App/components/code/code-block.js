import React from "react";
// import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
// import { okaidia }  from 'react-syntax-highlighter/dist/esm/styles/prism';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import powershell from 'react-syntax-highlighter/dist/esm/languages/prism/powershell';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import json from 'react-syntax-highlighter/dist/esm/languages/prism/json';
import javascript from 'react-syntax-highlighter/dist/esm/languages/prism/javascript';
import csharp from 'react-syntax-highlighter/dist/esm/languages/prism/csharp';
import okaidia from 'react-syntax-highlighter/dist/esm/styles/prism/okaidia';

SyntaxHighlighter.registerLanguage('powershell', powershell);
SyntaxHighlighter.registerLanguage('jsx', jsx);
SyntaxHighlighter.registerLanguage('json', json);
SyntaxHighlighter.registerLanguage('javascript', javascript);
SyntaxHighlighter.registerLanguage('csharp', csharp);
// import { github }  from 'react-syntax-highlighter/dist/esm/styles/hljs';


export default class CodeBlock extends React.Component {
    render() {
    const { value, showLineNumbers, customStyle } = this.props;
    return (
      <SyntaxHighlighter language={"powershell" || "csharp" || "jsx" || "javascript" || "json"} showLineNumbers={showLineNumbers} customStyle={customStyle} style={okaidia} >
        {value.trim()}
      </SyntaxHighlighter>
    );
  }
} 
