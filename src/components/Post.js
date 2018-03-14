import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import capitalize from './capitalize'

export default class Post extends Component {
  constructor(props){
    super(props)
    this.post = this.props.post
  }
  render(){
    return (
        <div className="uk-card uk-card-default uk-margin-medium-bottom">
            <div className="uk-card-header">
                <h3 className="uk-card-title uk-margin-remove-bottom">{this.post.title.capitalize()}</h3>
            </div>
            <div className="uk-card-body">
                <p>{this.post.body.capitalize()}</p>
            </div>
            <div className="uk-card-footer">
               <Link to={`/posts/${this.post.id}`} className="uk-button uk-button-text">Read more</Link>
            </div>
        </div>
      )
  }
}
