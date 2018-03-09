import React, { Component } from 'react';


export default class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit} className="uk-comment-form uk-margin-medium-top">
              <fieldset className="uk-fieldset">
                  <legend className="uk-legend">Add Comment</legend>
                  <div className="uk-margin">
                      <textarea className="uk-textarea" rows="5" onChange={this.handleChange} placeholder={this.state.text} required></textarea>
                  </div>
                  <div className="uk-margin">
                      <input className="uk-input" type="text" onChange={this.handleChange} placeholder={this.state.text} required />
                  </div>
                  <div className="uk-margin">
                      <input className="uk-input" type="email" onChange={this.handleChange} placeholder={this.state.text} required />
                  </div>
                  <div className="uk-margin">
                      <button className="uk-button uk-button-primary" type="submit">Post Comment</button>
                  </div>
              </fieldset>
          </form>
        </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(prevState => ({
      items: prevState.items.concat(newItem),
      text: ''
    }));
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }
}