import React from 'react'
import PostComment from './PostComment'
import comments from '../data/comments'


export default function PostComments(props) {
	const postId = props.postId;
  return (
    <div>
			<h3 className="uk-margin-remove-top">Comments:</h3>
			<div className="uk-comments">
				{comments.map(comment =>{
					if(postId == comment.postId){
						return <PostComment comment={comment}/>
					}
				})}
			</div>	
		</div>
  )
}
