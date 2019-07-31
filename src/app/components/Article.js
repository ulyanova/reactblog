import React, { Component } from "react";

export default class Article extends Component {
    render() {
        return (
            <article className="article">
                <img src="#" className="article__img"/>
                <p className="article-type__p">{this.props.type}</p>
                <h3 className="article__h">{this.props.title}</h3>
                <p className="article__p">{this.props.body}</p>
            </article>
        );
    }
}