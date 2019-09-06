import React from "react";
import styled from "styled-components";

export default class Root extends React.Component {
    render() {
        const { value, styles } = this.props;
        const Article = styled.article` 
            ${styles} 
        `;
        return (<Article className="markdown-container">{value}</Article>);
    }
} 