import React from "react";

export default class Image extends React.Component {
    render() {
        const {src, alt, title, styles} = this.props;
        let imgStyle
        if(styles.hasOwnProperty('img')){
            imgStyle = styles.img
        }
        return ( 
            <img className='ud-markdown-img' style={{...imgStyle}} src={src} title={title} alt={alt}/>
        );
    }
} 