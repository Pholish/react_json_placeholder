import React, { Component } from 'react';
import Navbar from './Navbar';
import PostBody from './PostBody';
import PostComments from './PostComments';
import FormComment from './FormComment';

export default class PostSingle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {},
      postId: this.props.match.params.id,
      comments: []
    };
  }

  componentDidMount() {
    fetch(
      `https://jsonplaceholder.typicode.com/posts/${
        this.state.postId
      }?_expand=user&_embed=comments`
    )
      .then(response => response.json())
      .then(data => {
        this.setState({
          post: data,
          comments: data.comments
        });
      });
  }

  handleStateChange(state) {
    this.setState(prevState => {
      comments: prevState.comments.push(state);
    });
    this.forceUpdate();
  }

  render() {
    return (
      <div>
        <Navbar />
        <main className="uk-main">
          <div className="uk-section">
            <div className="uk-container">
              <PostBody post={this.state.post} />
              <PostComments comments={this.state.comments} />
              <FormComment
                handleStateChange={this.handleStateChange.bind(this)}
              />
            </div>
          </div>
        </main>
      </div>
    );
  }
}
