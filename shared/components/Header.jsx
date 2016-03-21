import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import List from './List.jsx'

export default class Section extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header">
        <Link to="/">thinks & writes</Link>
      </div>
    );
  }
}
