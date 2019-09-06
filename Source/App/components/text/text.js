import React from "react";
import styled from "styled-components";

export default class Text extends React.Component {
    render() {
        const {styles, value} = this.props;
        let textStyle
        if(styles.hasOwnProperty('text')){
            textStyle = styles.text   
        }
        return ( 
            <text className='ud-markdown-text' style={{...textStyle}}>{value}</text>
        );
    }
} 