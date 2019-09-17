import React, { Component } from "react";
import ArticleFull from '../components/ArticleFull';
import ArticlesLikeList from "../components/ArticlesLikeList";

import { connect } from 'react-redux';
import {fetchPost} from '../actions/articlesActions';


@connect((store) => {
    return {
        articles: store.articles.articles,
        is_fetching: store.articles.is_fetching,
    }
})

export default class ArticleFullPage extends Component {
    constructor(props) {
        super(props);

        this.props.dispatch(fetchPost(this.props.match.params.id));


        /*this.props.dispatch(fetchPostComments(this.props.params.id));


        this.state = {
            showComments: false
        };*/

    }

    render() {
        if(!this.props.articles.length){
            return null;
        }

        let article = this.props.articles.map((article, index) => {
            return <ArticleFull key={index} {...article} />;
        });

        return (
            <>
                <div className="container clearfix">
                    <article className="article">
                        {article}
                    </article>
                    <div className="share">
                        <p className="share__p">share</p>
                        <a href="#" className="share__a"><i className="icon-facebook"></i></a>
                        <a href="#" className="share__a"><i className="icon-twitter"></i></a>
                        <a href="#" className="share__a"><i className="icon-gplus"></i></a>
                        <a href="#" className="share__a"><i className="icon-tumblr"></i></a>
                        <a href="#" className="share__a"><i className="icon-pinterest-circled"></i></a>
                    </div>
                </div>
                <div className="you-may-also-like">
                    <div className="container">
                        <p className="article-type__p">you may also like</p>
                        <ArticlesLikeList />
                    </div>
                </div>
            </>
        );
    }
}