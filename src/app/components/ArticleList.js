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

        console.log(window.location.pathname);

        switch (window.location.pathname) {
            case '/lifestyle':
                var data = this.state.articles.filter(article => article.type == "lifestyle");
                var articles = data.map((article, index) => {
                    return <Article key={index} {...article} />;
                });
                break;

            case '/photodiary':
                var data = this.state.articles.filter(article => article.type == "photodiary");
                var articles = data.map((article, index) => {
                    return <Article key={index} {...article} />;
                });
                break;

            case '/music':
                var data = this.state.articles.filter(article => article.type == "music");
                var articles = data.map((article, index) => {
                    return <Article key={index} {...article} />;
                });
                break;

            case '/travel':
                var data = this.state.articles.filter(article => article.type == "travel");
                var articles = data.map((article, index) => {
                    return <Article key={index} {...article} />;
                });
                break;

            default:
                var articles = this.state.articles.map((article, index) => {
                    return <Article key={index} {...article} />;
                });
        }

        return (
            <div className="articles container">
                {articles}
                <a href="#" className="articles__button">Load more</a>
            </div>
        );
    }
}