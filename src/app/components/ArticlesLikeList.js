import React, { Component } from "react";
import ArticlesLike from "../components/ArticlesLike";

import { connect } from 'react-redux';
import {fetchArticlesLike} from '../actions/articlesActions';

@connect((store) => {
    return {
        is_fetching: store.articles.is_fetching,
        articlesLike: store.articles.articlesLike
    }
})

export default class ArticlesLikeList extends Component {
    constructor(props) {
        super(props);
        this.props.dispatch(fetchArticlesLike());
    }

    render() {
        let articlesLike = this.props.articlesLike.map((articles, index) => {
            return <ArticlesLike key={index} {...articles} />;
        });

        return (
            <div className="articles-preview">
                {articlesLike}
            </div>
        );
    }
}