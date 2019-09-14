import React, { Component } from "react";
import {Link} from 'react-router-dom';

export default class ArticleFullPage extends Component {
    render() {
        return (
            <article className="article">
                <img src={this.props.img} className="article__img"/>
                <h5 className="article-type__p">{this.props.type}</h5>
                <Link to={'/post/' + this.props.id} className="article__h">{this.props.title}</Link>
                <p className="article__p">{this.props.body}</p>
                <a href="#" className="article__a">leave a comment</a>
            </article>
        );
    }
}