import React, { Component } from "react";

export default class ArticleFull extends Component {
    render() {
        return <>
            <img src={this.props.img + '.jpg'} className="article__img"/>
            <h5 className="article-type__p">{this.props.type}</h5>
            <h3 className="article__h">{this.props.title}</h3>
            { this.props.body.map((item) => (
                <p key={item} className="article__p">{item}</p>
            ))}

            { this.props.images.map((image) => (
                <img key={image} src={image} className="article__img"/>
            ))}

            { this.props.bodyItalic.map((item) => (
                <p key={item} className="article__p article__p_italic">{item}</p>
            ))}

            { this.props.bodyFull.map((item) => (
                <p key={item} className="article__p">{item}</p>
            ))}
        </>
    }
}