import React, { Component } from 'react';
import PostComment from './PostComment';

export default class PostComments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: []
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      comments: nextProps.comments
    });
  }
  render() {
    return (
      <div>
        <h3 className="uk-margin-remove-top">Comments:</h3>
        <div className="uk-comments">
          {this.state.comments.map(comment => {
            return <PostComment comment={comment} />;
          })}
        </div>
      </div>
    );
  }
}
