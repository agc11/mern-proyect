import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';

export default class List extends Component {
  constructor(props) {
    super(props);
  }

  generateLi(list, index) {
    return (
      <li key={index}>{list.title}
        <button onClick={() => this.handleClickButton(list._id)}>Remove</button>
      </li>);
  }

  handleClickButton(idList) {
    this.props.deleteList(idList);
  }

  render() {
    const { lists } = this.props;
    return (
      <div>
        <ul>
          {
            lists.map( (list, index) => this.generateLi(list, index))
          }
        </ul>
      </div>
    );
  }
}

List.propTypes = {
  lists: PropTypes.array.isRequired,
  deleteList: PropTypes.func.isRequired
};
List.defaultProps = {
  lists: []
};
