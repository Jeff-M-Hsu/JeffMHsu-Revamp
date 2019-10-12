import React, { Component } from 'react';

class Card extends Component{
  render(){
    return(
      <a className= "card" href="">    
        <img src={ this.props.image } />
        <div className="container">
          <h4>{ this.props.title }</h4>
          <p className="description">{ this.props.description }</p>
        </div>
        <p className="tags">{ this.props.tags }</p>
      </a>
    );
  }
}

export default Card;