import React from "react";
import styled from "styled-components";

export default class Table extends React.Component {
    render() {
        const {styles, value} = this.props
        return ( 
            <table className='ud-markdown-table' style={styles.hasOwnProperty('table') ? {...styles.table} : null}>{value}</table>
        );
    }
} 