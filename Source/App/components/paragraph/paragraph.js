import React from "react";
import styled from "styled-components";

export default class Paragraph extends React.Component {
    render() {
        const {value, styles} = this.props;
        let paragraphStyle
        if(styles.hasOwnProperty('p')){
            paragraphStyle = styles.p   
        }
        return ( 
            <p className='ud-markdown-paragraph' style={{...paragraphStyle}}>{value}</p> 
        );
    }
} 