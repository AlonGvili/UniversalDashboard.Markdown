import React from "react";
import styled from "styled-components";

export default class Tcell extends React.Component {
    render() {
        const { styles, value } = this.props;
        let tcellStyle
        if (styles.hasOwnProperty('table')) {
            if (styles.table.hasOwnProperty('td')) {
                        tcellStyle = styles.table.td ? styles.table.td : null
            }
        }
        return (
            <td className='ud-markdown-table-cell' style={{...tcellStyle}}>{value}</td>
        );
    }
} 