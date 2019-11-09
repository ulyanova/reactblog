import React from 'react';
import ArticleList from '../components/ArticleList';
import Newsletter from "../components/Newsletter";

import { connect } from 'react-redux';
import { fetchArticles } from '../actions/articlesActions';

@connect((store) => {
    return {
        articles: store.articles.articles,
        is_fetching: store.articles.is_fetching,
        loadButton: store.articles.loadButton
    }
})

export default class Travel extends React.Component
{
    constructor(props)
    {
        super(props);
        this.props.dispatch(fetchArticles('travel'));
    }

    render()
    {
        return (
            <>
                {
                    (!this.props.children) ?
                        (
                            this.props.is_fetching ?
                                <div className="container">
                                    <div className="articles">
                                        <h5 className="article-type__p">Pending...</h5>
                                    </div>
                                </div>
                                :
                                (
                                    <ArticleList />
                                )
                        )
                        :
                        (this.props.children)
                }
                <Newsletter />
            </>
        );
    }
}