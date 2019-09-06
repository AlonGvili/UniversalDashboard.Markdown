import React from "react";
import PropTypes from 'prop-types';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github }  from 'react-syntax-highlighter/dist/esm/styles/hljs';


export default class CodeBlock extends React.Component {
    render() {
    const { language, value, showLineNumbers, customStyle } = this.props;
    return (
      <SyntaxHighlighter language={language} showLineNumbers={showLineNumbers} customStyle={customStyle} style={github} >
        {value}
      </SyntaxHighlighter>
    );
  }
} 

CodeBlock.propTypes = {
    value: PropTypes.string.isRequired,
    language: PropTypes.string,
    showLineNumbers:PropTypes.bool,
    customStyle:PropTypes.object,
    escapeHtml:PropTypes.bool
}

CodeBlock.defaultProps = {
    language: ''
}