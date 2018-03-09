import React from 'react'
import capitalize from './capitalize'

export default function PostComment(props) {
	const comment = props.comment
	console.log(comment)
  return (
    <div>
			<article className="uk-comment">
        <header className="uk-comment-header uk-grid uk-grid-medium uk-flex-middle">
        	<div className="uk-width-expand">
        		<h4 className="uk-comment-title uk-margin-remove"><a className="uk-link-reset" href="#">Author</a></h4>
           	<ul className="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">
              <li>{comment.email.capitalize()}</li>
            </ul>
          </div>
        </header>
        <div className="uk-comment-body">
    	    <p>{comment.body.capitalize()}</p>
        </div>
      </article>
      <hr/>
		</div>
  )
}