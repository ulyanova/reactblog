import React, {Component} from 'react';
import Article from './Article';

import { connect } from 'react-redux';
import { loadMore } from '../actions/articlesActions';

@connect((store) => {
    return {
        articles: store.articles.articles,
        is_fetching: store.articles.is_fetching,
        loadButton: store.articles.loadButton
    }
})

export default class ArticleList extends Component {
    render()
    {
        if(!this.props.articles.length){
            return null;
        }

        let articles = this.props.articles.map((article, index) => {
            return <Article key={index} {...article} />;
        });

        return (
            <div className="container">
                <div className="articles">
                    {articles}
                </div>
                <a href="#" className={(!this.props.loadButton) ? "articles__button" + " active" : "articles__button"} onClick={(event) => {
                    event.preventDefault();
                    this.props.dispatch(loadMore(window.location.pathname));
                }}>Load more</a>
            </div>
        );
    }
}