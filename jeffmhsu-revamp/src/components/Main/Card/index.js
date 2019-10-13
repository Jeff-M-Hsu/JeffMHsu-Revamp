import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Card extends Component{
  render(){
    return(
      <Link className="card" to={ `${this.props.page}` }>
        <img alt="" src={ this.props.image } />
        <div className="container">
          <h4>{ this.props.title }</h4>
          <p className="description">{ this.props.description }</p>
        </div>
        <p className="tags">{ this.props.tags }</p>
      </Link>
    );
  }
}

export default Card;