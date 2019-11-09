import React, {Component} from 'react';
import Article from './Article';

import { connect } from 'react-redux';

@connect((store) => {
    return {
        articles: store.articles.articles,
        is_fetching: store.articles.is_fetching
    }
})

export default class ArticleList extends Component {
    constructor() {
        super();

        this.state = {
            count: 5
        };
    }

    render()
    {
        if(!this.props.articles.length){
            return (
                <div className="container">
                    <div className="articles">
                        <h5 className="article-type__p no-articles__h5">No&nbsp;articles on&nbsp;this topic</h5>
                    </div>
                </div>
            );
        }

        let articles = this.props.articles.slice(-this.state.count).reverse().map((article, index) => {
            return <Article key={index} {...article} />;
        });

        return (
            <div className="container">
                <div className="articles">
                    {articles}
                </div>
                <a href="#" className={(this.state.count < this.props.articles.length) ? "articles__button" + " active" :
                    "articles__button"} onClick={(event) => {
                    event.preventDefault();
                    (this.state.count < this.props.articles.length) && this.setState({count: this.state.count+4});
                }}>Load more</a>
            </div>
        );
    }
}