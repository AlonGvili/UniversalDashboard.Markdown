import React from "react";
import styled from "styled-components";

export default class Hr extends React.Component {
    render() {
        const {styles, value} = this.props
        let hrStyle
        if(styles.hasOwnProperty('hr')){
            hrStyle = styles.hr   
        }
        return ( 
            <hr className='ud-markdown-hr' style={{...hrStyle}}>{value}</hr>
        );
    }
} 