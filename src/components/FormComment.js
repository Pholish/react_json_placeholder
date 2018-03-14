import React, { Component } from 'react';

export default class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      email: '',
      name: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <TodoList state={this.state} />
        <form
          onSubmit={this.handleSubmit}
          className="uk-comment-form uk-margin-medium-top"
        >
          <fieldset className="uk-fieldset">
            <legend className="uk-legend">Add Comment</legend>
            <div className="uk-margin">
              <textarea
                className="uk-textarea"
                name="body"
                rows="5"
                onChange={this.handleChange}
                placeholder={this.state.body}
                required
              />
            </div>
            <div className="uk-margin">
              <input
                className="uk-input"
                name="name"
                type="text"
                onChange={this.handleChange}
                placeholder={this.state.name}
                required
              />
            </div>
            <div className="uk-margin">
              <input
                className="uk-input"
                name="email"
                type="email"
                onChange={this.handleChange}
                placeholder={this.state.email}
                required
              />
            </div>
            <div className="uk-margin">
              <button className="uk-button uk-button-primary" type="submit">
                Post Comment
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const commentState = {
      name: this.state.name,
      email: this.state.email,
      body: this.state.body
    };
    this.props.handleStateChange(commentState);
  }
}

class TodoList extends React.Component {
  render() {
    console.log(this.props);
    return <div />;
  }
}
