import React, { Component } from "react";
import {Link} from 'react-router-dom';

export default class Article extends Component {
    render() {
        return (
            <article className="article">
                <Link to={'/post/' + this.props.id} className="img__link"><img src={(this._reactInternalFiber.index == 0) ?
                    this.props.img + '.jpg' : this.props.img + 'min.jpg'} className="article__img"/></Link>
                <h5 className="article-type__p">{this.props.type}</h5>
                <Link to={'/post/' + this.props.id} className="article__h">{this.props.title}</Link>
                <p className="article__p">{this.props.body[0]}</p>
                <Link to={'/post/' + this.props.id} className="article__a">show more</Link>
            </article>
        );
    }
}