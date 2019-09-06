import React from "react";
// import styled from "styled-components";

export default class Strong extends React.Component {
    render() {
        const {styles, value} = this.props;
        let strongStyle
        if(styles.hasOwnProperty('strong')){
            strongStyle = styles.strong   
        }
        return ( 
            <strong className='ud-markdown-strong' style={{...strongStyle}}>{value}</strong>
        );
    }
} 