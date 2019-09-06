import React from "react";
import styled from "styled-components";

export default class Image extends React.Component {
    render() {
        const {src, alt, title, styles, children} = this.props;
        const Img = styled.img` 
            ${styles} 
        `;
        return ( 
            <Img src={src} title={title} alt={alt}/>
        );
    }
} 