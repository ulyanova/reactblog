import React, { Component } from "react";
import {Link} from 'react-router-dom';

export default class Article extends Component {
    render() {
        return (
            <article className="article">
                <Link to={'/post/' + this.props.id} className="article-img" style={{backgroundImage: 'url('+ this.props.img +')'}}></Link>
                <h5 className="article-type__p">{this.props.type}</h5>
                <Link to={'/post/' + this.props.id} className="article__h">{this.props.title}</Link>
                <p className="article__p">{this.props.body[0]}</p>
                <Link to={'/post/' + this.props.id} className="article__a">show more</Link>
            </article>
        );
    }
}