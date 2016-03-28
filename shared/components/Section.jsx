import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import Article from './Article.jsx';
import MyForm from './MyForm.jsx';

export default class Section extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { articles, deleteArticle, addArticle } = this.props;
    return (
      <div>
        <Article articles={articles} deleteArticle={deleteArticle} />
        <MyForm addArticle= {addArticle}/>
      </div>
    );
  }
}

Section.propTypes = {
  articles: PropTypes.array.isRequired,
  deleteArticle: PropTypes.func.isRequired,
  addArticle: PropTypes.func.isRequired
};
Section.defaultProps = {
  articles: []
};
