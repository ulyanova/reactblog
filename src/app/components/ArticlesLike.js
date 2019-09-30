import React, { Component } from "react";
import {Link} from 'react-router-dom';

export default class ArticlesLike extends Component {
    render() {
        return (
            <figure className="articles-preview__figure">
                <Link to={'/post/' + this.props.id} className="img__link"><img src={this.props.img + 'min.jpg'} className="article__img"/></Link>
                <p><Link to={'/post/' + this.props.id} className="article__h">{this.props.title}</Link></p>
            </figure>
        );
    }
}
