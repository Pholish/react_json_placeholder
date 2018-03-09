import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import capitalize from './capitalize'

export default function Post({post}) {
  return (
    <div className="uk-card uk-card-default uk-margin-medium-bottom">
        <div className="uk-card-header">
            <h3 className="uk-card-title uk-margin-remove-bottom">{post.title.capitalize()}</h3>
        </div>
        <div className="uk-card-body">
            <p>{post.body.capitalize()}</p>
        </div>
        <div className="uk-card-footer">
           <Link to={`/posts/${post.id}`} className="uk-button uk-button-text">Read more</Link>
        </div>
    </div>
  )
}
