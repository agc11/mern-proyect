import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import Article from './Article.jsx';
import MyForm from './MyForm.jsx';

export default class Section extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { articles, deleteArticle, addArticle, user, voteArticle } = this.props;
    return (
      <div>
        <Article articles={articles} deleteArticle={deleteArticle} user={user} voteArticle={voteArticle} />
        <MyForm addArticle= {addArticle} user={user}/>
      </div>
    );
  }
}

Section.propTypes = {
  articles: PropTypes.array.isRequired,
  user: PropTypes.object.isRequired,
  deleteArticle: PropTypes.func.isRequired,
  addArticle: PropTypes.func.isRequired,
  voteArticle: PropTypes.func.isRequired,
};
Section.defaultProps = {
  articles: [],
  user: {}
};
