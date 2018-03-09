import React from 'react'
import Navbar from './Navbar'
import PostBody from './PostBody'
import PostComments from './PostComments'
import FormComment from './FormComment'

export default function PostSingle(props) {
	const postId = props.match.params.id;
  return (
    <div>
      <Navbar/>
      <main className="uk-main">
        <div className="uk-section">
          <div className="uk-container">
            <PostBody postId={postId}/>
            <PostComments postId={postId} />
            <FormComment />
          </div>
      </div>
      </main>
    </div>
  )
}
