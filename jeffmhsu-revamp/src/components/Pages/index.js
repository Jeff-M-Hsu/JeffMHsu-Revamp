import React, { Component } from 'react';
import "../../sass/page.scss";

class Page extends Component{
  render(){
    return(
      <div className="project">
        <h1 id="projectname">{this.props.title}</h1>
        <div className="row">
          <img className="cover" src={this.props.img}></img>
        </div>
        <div className="row-space"></div>
        <div className="row">
          <div className="left-col">
            <p className="meta">
              Date: {this.props.date}<br></br>
              Contributor: Jeffrey Hsu<br></br>
              Purpose: {this.props.purpose}<br></br>
              Stack: {this.props.stack}
            </p>
          </div>
          <div className="right-col">
            <p>{this.props.description}</p>
            <p>
              You can check it out <a className="ext-link" target="_blank" href={this.props.ext}>here</a>.
            </p>
          </div>
        </div>
        <div className="row-space"></div>
        <div className="row-space"></div>
        <div className="row">
          <a href="/" id="back-button"><h2 id="return">Return</h2></a>
        </div>
      </div>
    );
  }
}

export default Page;