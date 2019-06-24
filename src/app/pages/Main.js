import React from 'react';
import ArticleList from '../components/ArticleList';

import { connect } from 'react-redux';
import { fetchArticles } from "../actions/articlesActions";

/*@connect((store) => {
    return {
        articles: store.articles.articles,
        is_fetching: store.articles.is_fetching
    }
})*/

class Articles extends React.Component
{
    constructor(props)
    {
        super(props);
        let toDispatch = fetchArticles();
        this.props.dispatch(toDispatch)
    }

    render()
    {
        console.log(this.props.children);
        console.log(this.props);
        return (
            <div>
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
            </div>
        );
    }
}

const mapStateToProps = store => {
    console.log(store);
    return {
        articles: store.articles.articles,
        is_fetching: store.articles.is_fetching
    }
}

export default connect(mapStateToProps) (Articles)

/*export default connect(state => ({
    articles: state.articles
}))(Articles)*/

/*@connect((store) => {
    return {
        articles: store.articles.articles,
        is_fetching: store.articles.is_fetching
    }
})*/