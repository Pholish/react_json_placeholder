import React, {Component} from 'react'

export default class Pagination extends Component {
  constructor(props){
    super(props)
    this.state = {
      value: 0
    }
  }
  render(){
    return (
      <ul className="uk-pagination uk-flex-center" uk-margin>
          <li><a href="#"><span uk-pagination-previous><svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg" ratio="1"><polyline fill="none" stroke="#000" stroke-width="1.2" points="6 1 1 6 6 11"></polyline></svg></span></a></li>
          <li><a href="#">1</a></li>
          <li className="uk-disabled"><span>...</span></li>
          <li><a href="#">5</a></li>
          <li><a href="#">6</a></li>
          <li className="uk-active"><span>7</span></li>
          <li><a href="#">8</a></li>
          <li><a href="#"><span uk-pagination-next><svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg" ratio="1"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 1 6 6 1 11"></polyline></svg></span></a></li>
      </ul>
    )
  }
}
