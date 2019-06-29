import React, {Component} from 'react';
import Article from './Article';
import articles from '../data/articlesData';

export default class ArticleList extends Component {
    constructor()
    {
        super(...arguments);

        this.state = {
            articles: articles
        };
    }

    render()
    {
        if(!this.state.articles.length){
            return null;
        }

        let articles = this.state.articles.map((article, index) => {
            return <Article key={index} {...article} />;
        });

        return (
            <div className="articles">
                {articles}
            </div>
        );
    }
}