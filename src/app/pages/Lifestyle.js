import React from 'react';
import ArticleList from '../components/ArticleList';

import { connect } from 'react-redux';
import { fetchArticles } from '../actions/articlesActions';

@connect((store) => {
    return {
        articles: store.articles.articles,
        is_fetching: store.articles.is_fetching,
        loadButton: store.articles.loadButton
    }
})

export default class Lifestyle extends React.Component
{
    constructor(props)
    {
        super(props);
        this.props.dispatch(fetchArticles('lifestyle'));
    }

    render()
    {
        return (
            <>
                {
                    (!this.props.children) ?
                        (
                            this.props.is_fetching ?
                                'Pending...' :
                                (
                                    <ArticleList />
                                )
                        )
                        :
                        (this.props.children)
                }
            </>
        );
    }
}