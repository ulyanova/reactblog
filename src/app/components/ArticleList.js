import React from 'react';
import Article from './Article';


export default class ArticleList extends Component {
    render()
    {
        console.log(this.props);
        if(!this.props.articles.length){
            return null;
        }

        let articles = this.props.articles.map((article, index) => {
            return <Article key={index} {...article} />;
        });

        return (
            <div className="articles">
                {articles}
            </div>
        );
    }
}