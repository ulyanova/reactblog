import React, { Component } from "react";
import ArticlesLike from "../components/ArticlesLike";

import { connect } from 'react-redux';

@connect((store) => {
    return {
        is_articlesLike_fetching: store.articles.is_articlesLike_fetching,
        articlesLike: store.articles.articlesLike
    }
})

export default class ArticlesLikeList extends Component {
    render() {
        let articlesLike = this.props.articlesLike.map((articles, index) => {
            return <ArticlesLike key={index} {...articles} />;
        });

        return (
            <div className="articles-preview">
                {
                    this.props.is_articlesLike_fetching ?
                        <div className="container">
                            <div className="articles">
                                <h5 className="article-type__p">Pending...</h5>
                            </div>
                        </div>
                        :
                        (articlesLike)
                }
            </div>
        );
    }
}