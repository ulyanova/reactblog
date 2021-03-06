import React, { PureComponent } from "react";
import ArticleFull from '../components/ArticleFull';
import ArticlesLikeList from "../components/ArticlesLikeList";
import CommentsBlock from "../components/CommentsBlock";

import { connect } from 'react-redux';
import {fetchPost} from '../actions/articlesActions';
import {fetchComments, fetchAllComments} from '../actions/commentsActions';
import {fetchUsers} from "../actions/usersActions";
import {fetchArticlesLike} from '../actions/articlesActions';

@connect((store) => {
    return {
        articles: store.articles.articles,
        is_articles_fetching: store.articles.is_fetching
    }
})

export default class ArticleFullPage extends PureComponent {
    constructor(props) {
        super(props);

        this.props.dispatch(fetchPost(this.props.match.params.id));
        this.props.dispatch(fetchComments(this.props.match.params.id));
        this.props.dispatch(fetchAllComments());
        this.props.dispatch(fetchUsers());
        this.props.dispatch(fetchArticlesLike());
    }

    componentDidUpdate(prevProps) {
        if(this.props.match.params.id !== prevProps.match.params.id ) {
            this.props.dispatch(fetchPost(this.props.match.params.id));
            this.props.dispatch(fetchComments(this.props.match.params.id));
            this.props.dispatch(fetchArticlesLike());
        };
    }

    render() {
        let article = this.props.articles.map((article, index) => {
            return <ArticleFull key={index} {...article} />;
        });

        return (
            <>
                {
                    (this.props.is_articles_fetching)
                        ?
                            <div className="container">
                                <div className="articles">
                                    <h5 className="article-type__p">Pending...</h5>
                                </div>
                            </div>
                        :
                        (
                            <>
                                <div className="container clearfix">
                                    <article className="article">
                                        {article}
                                    </article>
                                    <div className="share">
                                        <p className="share__p">share</p>
                                        <a href="#" className="share__a"><i className="icon-facebook" onClick={(event) => {
                                            event.preventDefault();
                                        }}></i></a>
                                        <a href="#" className="share__a"><i className="icon-twitter" onClick={(event) => {
                                            event.preventDefault();
                                        }}></i></a>
                                        <a href="#" className="share__a"><i className="icon-gplus" onClick={(event) => {
                                            event.preventDefault();
                                        }}></i></a>
                                        <a href="#" className="share__a"><i className="icon-tumblr" onClick={(event) => {
                                            event.preventDefault();
                                        }}></i></a>
                                        <a href="#" className="share__a"><i className="icon-pinterest-circled" onClick={(event) => {
                                            event.preventDefault();
                                        }}></i></a>
                                    </div>
                                </div>
                                <div className="you-may-also-like">
                                    <div className="container">
                                        <p className="article-type__p">you may also like</p>
                                        <ArticlesLikeList/>
                                    </div>
                                </div>
                                <CommentsBlock />
                            </>
                        )
                }
            </>

        );
    }
}