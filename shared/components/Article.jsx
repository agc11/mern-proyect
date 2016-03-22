import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';

export default class Article extends Component {
  constructor(props) {
    super(props);
  }

  generateLi(article, index) {
    return (
      <div className="panel panel-default" key={index}>
        <div className="panel-heading article-header">
          <span className="article-title">{article.title.substring(0, 1).toUpperCase() + article.title.substring(1)}</span>
          <span className="article-theme">{` ~ ${article.theme}`}</span>
        </div>
        <div className="panel-body">{article.content}</div>
        <div className="panel-footer">{`Author: ${article.author} ~ Date: ${article.dateAdded}`}
          <div className="article-votes">
            <span className="glyphicon glyphicon-thumbs-up button-like">{`${article.likes}`}</span>
            <span className="glyphicon glyphicon-thumbs-down button-dislike">{`${article.dislikes}`}</span>
          </div>
        </div>
        <button className="btn btn-default" onClick={() => this.handleClickButton(article._id)}>Remove</button>
      </div>);
  }

  handleClickButton(idArticle) {
    this.props.deleteArticle(idArticle);
  }

  render() {
    const { articles } = this.props;
    return (
      <div>
          {
            articles.map( (article, index) => this.generateLi(article, index))
          }
      </div>
    );
  }
}

Article.propTypes = {
  articles: PropTypes.array.isRequired,
  deleteArticle: PropTypes.func.isRequired
};
Article.defaultProps = {
  articles: []
};
