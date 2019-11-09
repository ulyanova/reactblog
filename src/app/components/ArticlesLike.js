import React, { Component } from "react";
import {Link} from 'react-router-dom';

export default class ArticlesLike extends Component {
    render() {
        return (
            <figure className="articles-preview__figure">
                <Link to={'/post/' + this.props.id} className="article-img" style={{backgroundImage: 'url('+ this.props.img +')'}}></Link>
                <Link to={'/post/' + this.props.id} className="article__h">{this.props.title}</Link>
            </figure>
        );
    }
}
