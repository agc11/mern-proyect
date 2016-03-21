import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../../redux/actions/actions';
import Section from '../../components/Section.jsx'
import Header from '../../components/Header.jsx';

class SectionContainer extends Component {
  constructor(props, context) {
    super(props, context);
    const { lists } = props;
    this.state = { lists };
  }

  componentWillReceiveProps(nextProps) {
    const { lists } = nextProps;
    this.setState({ lists });
  }

  componentDidMount() {
    this.props.fetchLists();
    socket.on('new:list', function(list){
      this.setState({ list: this.state.list.concat(list) });
    });
  }

  deleteList(idList) {
    this.props.removeList(idList);
  }

  addList(title, content, theme) {
    this.props.addListRequest(title, content, theme);
  }

  render() {

    return (
      <div>
        <Header />
        <div>
          <Section lists={this.state.lists} deleteList={this.props.removeList} addList={this.props.addListRequest} />
        </div>
      </div>
    );
  }
}

SectionContainer.need = [() => { return Actions.fetchLists(); }];
SectionContainer.contextTypes = {
  router: React.PropTypes.object,
};

function mapStateToProps(state) {
  return {
    lists: state.lists
  };
}

function mapActionsToProps(dispatch) {
  return {
    addListRequest: (title, content, theme) => dispatch(Actions.addListRequest(title, content, theme)),
    fetchLists: () => dispatch(Actions.fetchLists()),
    removeList: (idList) => dispatch(Actions.removeList(idList))
  };
}

SectionContainer.propTypes = {
  lists: PropTypes.array.isRequired,
  addListRequest: PropTypes.func.isRequired,
  removeList: PropTypes.func.isRequired,
  fetchLists: PropTypes.func.isRequired
};

SectionContainer.defaultProps = {
  lists: []
};

export default connect(mapStateToProps, mapActionsToProps)(SectionContainer);
