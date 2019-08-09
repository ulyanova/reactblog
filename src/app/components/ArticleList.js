import React, {Component} from 'react';
import Article from './Article';
//import articles from '../data/articlesData';
import axios from 'axios';

export default class ArticleList extends Component {
    constructor()
    {
        super(...arguments);

        this.state = {
            articles: []
        };

        this._isMounted = false;

        //Получение пользователей
        axios
            .get('http://localhost:8082/api/posts')
            .then((response) => {
                if(this._isMounted) {
                    let { data } = response;
                    this.setState({
                        articles: data
                    });
                }
            });
    }

    componentDidMount() {
        this._isMounted = true;
    }

    componentWillUnmount() {
        this._isMounted = false;
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
            <div className="articles container">
                {articles}
                <a href="#" className="articles__button">Load more</a>
            </div>
        );
    }
}