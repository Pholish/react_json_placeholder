import React from 'react'
import Navbar from './Navbar'
import PostList from './PostList'
import Pagination from './Pagination'
import posts from '../data/posts'

export default function Users() {
  return (
    <div>
      <Navbar/>
      <main className="uk-main">
        <div className="uk-section">
          <div className="uk-container">
            <h2>Users</h2>
            <PostList posts={posts}/>
            <Pagination/>
          </div>
      </div>
      </main>
    </div>
  )
}
