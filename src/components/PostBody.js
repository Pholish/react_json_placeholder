import React, {Component} from 'react'
import capitalize from './capitalize'

export default class PostBody extends Component {
  constructor(props){
    super(props)
    this.state = {
      post: this.props.post
    }
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      post: nextProps.post
    })
  }
  // shouldComponentUpdate(nextProps){
  //   return this.state.post.title == undefined ? false : true
  // }

  render(){
    return (
      <div className="uk-card uk-card-default uk-margin-medium-bottom">
          <h1 className="uk-heading-bullet uk-margin-medium-bottom">
            <span>{this.state.post.title}</span>
            <a className="uk-text-small" to="postBody">Author</a>
          </h1>
          <div className="uk-article uk-dropcap uk-margin-large-bottom"><p>{this.state.post.body}</p></div>
          <hr/>
      </div>
    )
  }
}
