import React, { Component } from "react";
import {Link} from 'react-router-dom';

export default class ArticleFull extends Component {
    render() {
        return (
            <>
                <img src={this.props.img[0]} className="article__img"/>
                <h5 className="article-type__p">{this.props.type}</h5>
                <h3 className="article__h">{this.props.title}</h3>
                <p className="article__p">{this.props.body[0]}</p>
                <p className="article__p">{this.props.body[1]}</p>
                <img src={this.props.img[1]} className="article__img"/>
                <img src={this.props.img[2]} className="article__img"/>
                <img src={this.props.img[3]} className="article__img"/>
                <p className="article__p">{this.props.body[2]}</p>
                <p className="article__p">{this.props.body[3]}</p>
            </>
        );
    }
}