import React, {Component} from 'react'
import Post from './Post'

export default class PostList extends Component{
  constructor(props){
    super(props)
    this.posts = this.props.posts

    this.state = {
      posts: this.props.posts
    }
  }
  render(){
    return (
      <div className="uk-grid uk-child-width-1-2@s uk-child-width-1-3@m">
        {this.props.posts.map(post => {
          return <div><Post post={post}/></div>
        })} 
      </div> 
    )
  }
}
