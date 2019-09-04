import React, {Component} from 'react';
import Article from './Article';
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

        switch (window.location.pathname) {
            case '/lifestyle':
                var data = this.state.articles.filter(article => article.type == "lifestyle").slice(-5).reverse();
                if(!data.length){
                    return <p className="article__p center container">There are no articles of this subject</p>;
                }
                var articles = data.map((article, index) => {
                    return <Article key={index} {...article} />;
                });
                break;

            case '/photodiary':
                var data = this.state.articles.filter(article => article.type == "photodiary").slice(-5).reverse();
                if(!data.length){
                    return <p className="article__p center container">There are no articles of this subject</p>;
                }
                var articles = data.map((article, index) => {
                    return <Article key={index} {...article} />;
                });
                break;

            case '/music':
                var data = this.state.articles.filter(article => article.type == "music").slice(-5).reverse();
                if(!data.length){
                    return <p className="article__p center container">There are no articles of this subject</p>;
                }
                var articles = data.map((article, index) => {
                    return <Article key={index} {...article} />;
                });
                break;

            case '/travel':
                var data = this.state.articles.filter(article => article.type == "travel").slice(-5).reverse();
                if(!data.length){
                    return <p className="article__p center container">There are no articles of this subject</p>;
                }
                var articles = data.map((article, index) => {
                    return <Article key={index} {...article} />;
                });
                break;

            default:
                var data = this.state.articles.slice(-5).reverse();
                var articles = data.map((article, index) => {
                    return <Article key={index} {...article} />;
                });
        }

        return (
            <div className="articles container">
                {articles}
                <a href="#" className={(articles.length>4) ? "articles__button" + " active" : "articles__button"}>Load more</a>
            </div>
        );
    }
}