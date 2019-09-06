import React from "react";
import styled from "styled-components";

export default class Blockquote extends React.Component {
    render() {
        const {value, styles} = this.props;
        let blockquoteStyle
        if(styles.hasOwnProperty('blockquote')){
            blockquoteStyle = styles.blockquote   
        }
        return ( <blockquote className='ud-markdown-blockquote' style={{...blockquoteStyle}}>{value}</blockquote> );
    }
} 