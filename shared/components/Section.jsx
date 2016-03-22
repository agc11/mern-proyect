import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import Article from './Article.jsx';
import MyForm from './MyForm.jsx';

export default class Section extends Component {
  constructor(props) {
    super(props);
  }

  handleOnClickAddArticle() {
    const { addArticle } = this.props;
    const title = this.refs.title.value;
    const content = this.refs.content.value;
    const theme = this.refs.theme.value;
    addArticle(title, content, theme);
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
