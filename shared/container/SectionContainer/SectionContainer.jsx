import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../../redux/actions/actions';
import Section from '../../components/Section.jsx';


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

  componentWillUnmount() {
    socket.removeListener('new:article');
    socket.removeListener('delete:article');
  }

  _addArticle(newArticle) {
    this.props.addArticleLocal(newArticle);
  }

  _removeArticle(removedArticle) {
    this.props.removeArticleLocal(removedArticle);
  }

  render() {
    const { addArticleRequest, fetchArticles, removeArticleRequest } = this.props;
    return (
      <div>
        <Section articles={this.state.articles} deleteArticle={removeArticleRequest} addArticle={addArticleRequest} />
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
    addArticleRequest: (title, content, theme) => Actions.addArticleRequest(title, content, theme),
    fetchArticles: () => dispatch(Actions.fetchArticles()),
    removeArticleRequest: (idArticle) => Actions.removeArticleRequest(idArticle),
    addArticleLocal: (article) => dispatch(Actions.addArticleLocal(article)),
    removeArticleLocal: (article) => dispatch(Actions.removeArticleLocal(article))
  };
}

SectionContainer.propTypes = {
  articles: PropTypes.array.isRequired,
  addArticleRequest: PropTypes.func.isRequired,
  removeArticleRequest: PropTypes.func.isRequired,
  fetchArticles: PropTypes.func.isRequired,
  addArticleLocal: PropTypes.func.isRequired,
  removeArticleLocal: PropTypes.func.isRequired
};

SectionContainer.defaultProps = {
  articles: []
};

export default connect(mapStateToProps, mapActionsToProps)(SectionContainer);
