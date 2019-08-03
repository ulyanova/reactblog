import React, { Component } from "react";

export default class Article extends Component {
    render() {
        return (
            <article className="article">
                <img src={this.props.img} className="article__img"/>
                <h5 className="article-type__p">{this.props.type}</h5>
                <h3 className="article__h">{this.props.title}</h3>
                <p className="article__p">{this.props.body}</p>
                <a className="article__a">leave a comment</a>
            </article>
        );
    }
}