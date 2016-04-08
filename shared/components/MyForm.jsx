import React, { PropTypes, Component } from 'react';
import themesTypes from '../utils/themes.value.js';
const Textarea = require('react-textarea-autosize');

export default class MyForm extends Component {
  constructor(props) {
    super(props);
  }

  handleOnClickAddArticle() {
    const { addArticle, user } = this.props;
    const title = this.refs.title.value;
    const content = this.refs.content.value;
    const theme = this.refs.theme.value;
    this.resetForm();
    addArticle(title, content, theme, user);
  }

  resetForm() {
    this.refs.title.value = '';
    this.refs.content.value = '';
  }

  render() {
    return (
        <div className="form-horizontal container-fluid form-article">
          <div className="form-group">
            <label htmlFor="title" className="col-sm-2 control-label">Title</label>
            <div className="col-sm-5">
              <input type="title" className="form-control" ref="title" id="title" placeholder="Title" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="theme" className="col-sm-2 control-label">Theme</label>
            <div className="col-sm-2">
              <select className="form-control" id="theme" ref="theme">
                {
                  themesTypes.map((theme, i) => <option key={i}>{theme}</option>)
                }
              </select>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="content" className="col-sm-2 control-label">Content</label>
            <div className="col-sm-8">
              <Textarea className="form-control" ref="content" id="content" rows={6} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-10">
              <button className="btn btn-default pull-right" onClick={() => this.handleOnClickAddArticle()}>
                Send
              </button>
            </div>
          </div>

        </div>
    );
  }
}

MyForm.propTypes = {
  user: PropTypes.object.isRequired,
  addArticle: PropTypes.func.isRequired,
};

MyForm.defaultProps = {
  user: {}
};
