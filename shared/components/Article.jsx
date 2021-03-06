import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';

export default class Article extends Component {
  constructor(props) {
    super(props);
  }

  handleClickButton(idArticle) {
    const { deleteArticle, user } = this.props;
    deleteArticle(idArticle, user);
  }

  handleOnClickVote(article, vote) {
    const { user, voteArticle } = this.props;
    voteArticle(article, user, vote);
  }

  generateArticle(article, index) {
    const { user } = this.props;
    return (
      <div className="panel panel-default" key={index}>
        <div className="panel-heading article-header">
          <span className="article-title">{article.title.substring(0, 1).toUpperCase() + article.title.substring(1)}</span>
          <span className="article-theme">{` ~ ${article.theme}`}</span>
        </div>
        <div className="panel-body">{article.content}</div>
        <div className="panel-footer">{`Author: ${article.author} ~ Date: ${article.dateAdded}`}
          <div className="article-votes">
            <span onClick={() => this.handleOnClickVote(article, 'likes')} className="glyphicon glyphicon-thumbs-up button-like">{`${article.likes}`}</span>
            <span onClick={() => this.handleOnClickVote(article, 'dislikes')} className="glyphicon glyphicon-thumbs-down button-dislike">{`${article.dislikes}`}</span>
          </div>
        </div>
        {
          user.user.username !== article.author
            ? ''
            : <button className="btn btn-default" onClick={() => this.handleClickButton(article._id)}>Remove</button>
        }
      </div>);
  }



  render() {
    const { articles, user } = this.props;
    return (
      <div>
          {
            articles.map( (article, index) => this.generateArticle(article, index))
          }
      </div>
    );
  }
}

Article.propTypes = {
  articles: PropTypes.array.isRequired,
  user: PropTypes.object.isRequired,
  deleteArticle: PropTypes.func.isRequired,
  voteArticle: PropTypes.func.isRequired,
};
Article.defaultProps = {
  articles: [],
  user: {}
};
