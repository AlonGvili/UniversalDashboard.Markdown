import React from "react";
// import styled from "styled-components";

export default class Tbody extends React.Component {
    render() {
        const {styles, value} = this.props
        let tbodyStyle 
        if(styles.hasOwnProperty('table')){
            if(styles.hasOwnProperty.call(styles.table, 'tbody')){
                tbodyStyle = styles.table.tbody
            }
        }
        return ( 
            <tbody className='ud-markdown-table-body' style={{...tbodyStyle}}>{value}</tbody> 
        );
    }
} 