import React, { Component } from 'react';
import "../../sass/page.scss";
import { Link } from 'react-router-dom';

class Page extends Component{
  componentDidMount(){
    window.scrollTo(0,0);
  }
  render(){
    return(
      <div className="project">
        <h1 id="projectname">{this.props.title}</h1>
        <div className="row">
          <img className="cover" alt="" src={this.props.img}></img>
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
              You can check it out <a className="ext-link" target="_blank"rel="noopener noreferrer" href={this.props.ext}>here</a>.
            </p>
          </div>
        </div>
        <div className="row-space"></div>
        <div className="row-space"></div>
        <div className="row">
          <Link to={"/"} id="back-button"><h2 id="return">Return</h2></Link>
        </div>
      </div>
    );
  }
}

export default Page;