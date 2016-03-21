import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import List from './List.jsx'

export default class Section extends Component {
  constructor(props) {
    super(props);
  }

  generateLi(list, index) {
    return (<li key={index}>{list.title}</li>)
  }

  handleOnClickAddList() {
    const { addList } = this.props;
    const title = this.refs.title.value;
    const content = this.refs.content.value;
    const theme = this.refs.theme.value;
    addList(title, content, theme);
  }

  render() {
    const { lists, deleteList } = this.props;
    return (
      <div>
        <List lists={lists} deleteList={deleteList} />
        <div>
          Title: <input type="text" ref="title" />
          Content: <input type="text" ref="content" />
          Theme: <input type="text" ref="theme" />
          <button onClick={() => this.handleOnClickAddList()} >Send</button>
        </div>
      </div>
    );
  }
}

Section.propTypes = {
  lists: PropTypes.array.isRequired,
  deleteList: PropTypes.func.isRequired,
  addList: PropTypes.func.isRequired
};
Section.defaultProps = {
  lists: []
};
