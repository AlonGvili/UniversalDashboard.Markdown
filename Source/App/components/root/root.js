import React, { Fragment } from "react";
// import styled from "styled-components";

export default class Root extends React.Component {
    render() {
        const { styles, value } = this.props
        return (
        <article className="ud-markdown-root" style={{...styles}}>{value}</article>
        );
    }
} 