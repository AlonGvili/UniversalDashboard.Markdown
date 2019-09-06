import React from "react";
// import styled from "styled-components";

export default class ListItem extends React.Component {
    render() {
        const { value, styles } = this.props
        let listItemStyle
        if (styles.hasOwnProperty('list')) {
            if (styles.list.hasOwnProperty('listitem')) {
                listItemStyle = styles.list.listitem
            }
        }
        return (
            <li className='ud-markdown-list-item' style={{ ...listItemStyle }}>{value}</li>
        );
    }
} 