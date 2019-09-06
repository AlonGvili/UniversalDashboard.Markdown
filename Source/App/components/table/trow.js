import React from "react";
// import styled from "styled-components";

export default class Trow extends React.Component {
    render() {
        const { styles, value } = this.props
        let trowStyle
        if (styles.hasOwnProperty('table')) {
            if (styles.hasOwnProperty.call(styles.table, 'trow')) {
                    trowStyle = styles.table.trow
            }
        }
        return (
            <tr className='ud-markdown-table-row' style={{ ...trowStyle }}>{value}</tr>
        );
    }
} 