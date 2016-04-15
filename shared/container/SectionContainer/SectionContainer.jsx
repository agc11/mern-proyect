import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../../redux/actions/actions';
import Section from '../../components/Section.jsx';
import HeaderContainer from '../HeaderContainer/HeaderContainer.jsx';
import { browserHistory } from 'react-router';

class SectionContainer extends Component {
  constructor(props, context) {
    super(props, context);
    const { articles } = props;
    this.state = { articles };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({articles: nextProps.articles});
  }

  componentWillMount() {
    const { articles, user } = this.props;
    if(!user.token && !user.user) {
      browserHistory.push('/login');
    }
    if(user.token) this.props.fetchArticles(user);
  }

  componentDidMount() {
    socket.on('new:article', this._addArticle.bind(this));
    socket.on('delete:article', this._removeArticle.bind(this));
    socket.on('vote:article', this._voteArticle.bind(this));
  }

  componentWillUnmount() {
    socket.removeListener('new:article');
    socket.removeListener('delete:article');
    socket.removeListener('vote:article');
  }

  _addArticle(newArticle) {
    this.props.addArticleLocal(newArticle);
  }

  _removeArticle(removedArticle) {
    this.props.removeArticleLocal(removedArticle);
  }

  _voteArticle(article) {
    this.props.voteArticleLocal(article);
  }

  render() {
    const { addArticleRequest, fetchArticles, removeArticleRequest, voteArticleRequest, articles, user } = this.props;

    return (
      <div>
        <HeaderContainer />
        <Section articles={articles} user={user} voteArticle={voteArticleRequest} deleteArticle={removeArticleRequest} addArticle={addArticleRequest} />
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
    articles: state.articles,
    user: state.user
  };
}

function mapActionsToProps(dispatch) {
  return {
    addArticleRequest: (title, content, theme, user) => Actions.addArticleRequest(title, content, theme, user),
    fetchArticles: (user) => dispatch(Actions.fetchArticles(user)),
    removeArticleRequest: (idArticle, user) => Actions.removeArticleRequest(idArticle, user),
    addArticleLocal: (article, user) => dispatch(Actions.addArticleLocal(article)),
    removeArticleLocal: (article) => dispatch(Actions.removeArticleLocal(article)),
    voteArticleRequest: (article, user, vote) => Actions.voteArticleRequest(article, user, vote),
    voteArticleLocal: (article) => dispatch(Actions.voteArticleLocal(article))
  };
}

SectionContainer.propTypes = {
  articles: PropTypes.array.isRequired,
  user: PropTypes.object.isRequired,
  addArticleRequest: PropTypes.func.isRequired,
  removeArticleRequest: PropTypes.func.isRequired,
  fetchArticles: PropTypes.func.isRequired,
  addArticleLocal: PropTypes.func.isRequired,
  removeArticleLocal: PropTypes.func.isRequired,
  voteArticleRequest: PropTypes.func.isRequired,
  voteArticleLocal: PropTypes.func.isRequired
};

SectionContainer.defaultProps = {
  articles: [],
  user: {}
};

export default connect(mapStateToProps, mapActionsToProps)(SectionContainer);
