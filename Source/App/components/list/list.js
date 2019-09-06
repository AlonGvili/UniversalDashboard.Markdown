import React from "react";
// import styled from "styled-components";

export default class List extends React.Component {
    render() {
        const {value,styles } = this.props
        let listStyle 
        if(styles.hasOwnProperty('list')){
            if(styles.list.hasOwnProperty('ol')){
                listStyle = styles.list.ol
            }
            else if(styles.list.hasOwnProperty('ul')){
                listStyle = styles.list.ul
            }
        }

        return ( 
            value.ordered ? <ol className='ud-markdown-list-ol' style={{...listStyle}}>{value.children}</ol> : <ul className='ud-markdown-list-ul' style={{...listStyle}}>{value.children}</ul>
        );
    }
} 