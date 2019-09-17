import React, { Component } from "react";
import {Link} from 'react-router-dom';

export default class Article extends Component {
    render() {
        return (
            <article className="article">
                <img src={(this._reactInternalFiber.index == 0) ? this.props.img + '.jpg' : this.props.img + 'min.jpg'} className="article__img"/>
                <h5 className="article-type__p">{this.props.type}</h5>
                <p><Link to={'/post/' + this.props.id} className="article__h">{this.props.title}</Link></p>
                <p className="article__p">{this.props.body[0]}</p>
                <a href="#" className="article__a">leave a comment</a>
            </article>
        );
    }
}