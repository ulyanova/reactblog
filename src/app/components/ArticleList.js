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
            .get('https://jsonplaceholder.typicode.com/posts')
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
            <div className="articles">
                {articles}
            </div>
        );
    }
}