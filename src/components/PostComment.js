import React, { Component } from 'react';
import capitalize from './capitalize';

export default class PostComment extends Component {
  constructor(props) {
    super(props);
    this.comment = this.props.comment;
  }
  render() {
    console.log(this.comment.name);
    return (
      <div>
        <article className="uk-comment">
          <header className="uk-comment-header uk-grid uk-grid-medium uk-flex-middle">
            <div className="uk-width-expand">
              <h4 className="uk-comment-title uk-margin-remove">
                <a className="uk-link-reset" href="#">
                  {this.comment.name.capitalize()}
                </a>
              </h4>
              <ul className="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">
                <li>{this.comment.email.capitalize()}</li>
              </ul>
            </div>
          </header>
          <div className="uk-comment-body">
            <p>{this.comment.body.capitalize()}</p>
          </div>
        </article>
        <hr />
      </div>
    );
  }
}
