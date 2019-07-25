import React from 'react';
import ArticleList from '../components/ArticleList';

import { connect } from 'react-redux';
import { fetchArticles } from '../actions/articlesActions';
import articles from '../data/articlesData';

@connect((store) => {
    return {
        articles: store.articles.articles,
        is_fetching: store.articles.is_fetching
    }
})

export default class Main extends React.Component
{
    constructor(props)
    {
        super(props);
        let toDispatch = fetchArticles(articles);
        this.props.dispatch(toDispatch);
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
                                (<ArticleList />)
                        )
                        :
                        (this.props.children)
                }
            </>
        );
    }
}