import React from "react";
// import styled from "styled-components";

export default class InlineCode extends React.Component {
    render() {
        const {value, styles} = this.props
        return ( 
            <code style={{...styles}}>{value}</code> 
        );
    }
} 