import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import themesTypes from '../utils/themes.value.js';

export default class Section extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
          <div className="header"></div>
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <Link to="/" className="navbar-brand">Thinks & Writes</Link>
              </div>
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                  <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Themes <span className="caret"></span></a>
                    <ul className="dropdown-menu">
                      <li><a href="#">All</a></li>
                      <li role="separator" className="divider"></li>
                      {
                        themesTypes.map( (theme, i) => <li key={i}><a href="#">{theme}</a></li>)
                      }
                    </ul>
                  </li>
                </ul>
                <form className="navbar-form navbar-left" role="search">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Search" />
                  </div>
                  <button type="submit" className="btn btn-default">Search</button>
                </form>
                <ul className="nav navbar-nav pull-right">
                  <li className="active"><a  href="#">Login</a></li>
                </ul>
              </div>
            </div>
          </nav>
          </div>
    );
  }
}
