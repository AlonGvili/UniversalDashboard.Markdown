import React from "react";
// import styled from "styled-components";

export default class Thead extends React.Component {
    render() {
        const {styles, value} = this.props;
        let theadStyle 
        if(styles.hasOwnProperty('table')){
            if(styles.hasOwnProperty.call(styles.table, 'thead')){
                theadStyle = styles.table.thead
            }
        }
        return ( 
            <thead className='ud-markdown-table-head' style={{...theadStyle}}>{value}</thead>
        );
    }
} 