import React, {Component} from 'react'
import Navbar from './Navbar'
import PostList from './PostList'
import Pagination from './Pagination'

export default class Posts extends Component {
  constructor(props){
    super(props)
    this.state = {
      posts: []
    }
  }
 
  componentDidMount(){
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          posts: data
        })
      })
  }
   
  render() {
    return (
    <div>
      <Navbar/>
      <main className="uk-main">
        <div className="uk-section">
          <div className="uk-container">
            <h2>Posts</h2>
            <PostList posts={this.state.posts} />
            <Pagination/>
          </div>
      </div>
      </main>
    </div>
  )}
} 
