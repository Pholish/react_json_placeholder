import React from 'react'
import posts from '../data/posts'
import capitalize from './capitalize'

export default function PostBody(id) {
	const postId = id.postId
  const post = posts[postId-1]
  return (
    <div className="uk-card uk-card-default uk-margin-medium-bottom">
        <h1 className="uk-heading-bullet uk-margin-medium-bottom">
          <span>{post.title.capitalize()}</span>
          <a className="uk-text-small" to="postBody">Author</a>
        </h1>
        <div className="uk-article uk-dropcap uk-margin-large-bottom"><p>{post.body.capitalize()}</p></div>
        <hr/>
    </div>
  )
}
