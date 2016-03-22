import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../../redux/actions/actions';
import Section from '../../components/Section.jsx';
import Header from '../../components/Header.jsx';

class SectionContainer extends Component {
  constructor(props, context) {
    super(props, context);
    const { articles } = props;
    this.state = { articles };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({articles: nextProps.articles});
  }

  componentDidMount() {
    socket.on('new:article', this._addArticle.bind(this));
    socket.on('delete:article', this._removeArticle.bind(this));
  }

  _addArticle(newArticle) {
    this.setState({ articles: [newArticle].concat(this.state.articles)});
  }

  _removeArticle(removedArticle) {
    this.setState({ articles: this.state.articles.filter(article => article._id!== removedArticle._id) });
  }

  deleteArticle(idArticle) {
    this.props.removeArticle(idArticle);
  }

  addArticle(title, content, theme) {
    this.props.addArticleRequest(title, content, theme);
  }

  render() {
    const { addArticleRequest, fetchArticles, removeArticle } = this.props;
    return (
      <div>
        <Header />
        <div>
          <Section articles={this.state.articles} deleteArticle={removeArticle} addArticle={addArticleRequest} />
        </div>
      </div>
    );
  }
}

SectionContainer.need = [() => { return Actions.fetchArticles(); }];
SectionContainer.contextTypes = {
  router: React.PropTypes.object,
};

function mapStateToProps(state) {
  return {
    articles: state.articles
  };
}

function mapActionsToProps(dispatch) {
  return {
    addArticleRequest: (title, content, theme) => dispatch(Actions.addArticleRequest(title, content, theme)),
    fetchArticles: () => dispatch(Actions.fetchArticles()),
    removeArticle: (idArticle) => dispatch(Actions.removeArticle(idArticle))
  };
}

SectionContainer.propTypes = {
  articles: PropTypes.array.isRequired,
  addArticleRequest: PropTypes.func.isRequired,
  removeArticle: PropTypes.func.isRequired,
  fetchArticles: PropTypes.func.isRequired
};

SectionContainer.defaultProps = {
  articles: []
};

export default connect(mapStateToProps, mapActionsToProps)(SectionContainer);
