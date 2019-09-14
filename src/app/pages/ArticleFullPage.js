import React, { Component } from "react";
import ArticleFull from '../components/ArticleFull';

import { connect } from 'react-redux';
import { fetchPost } from '../actions/articlesActions';

@connect((store) => {
    return {
        articles: store.articles.articles,
        is_fetching: store.articles.is_fetching,
        loadButton: store.articles.loadButton
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
            <div className="container">
                <article className="article">
                    {article}
                </article>
            </div>
        );
    }
}