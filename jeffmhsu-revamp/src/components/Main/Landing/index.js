import React, { Component } from 'react';

class Landing extends Component{
  render(){
    return(
      <div className="landing">
        <div className="summary">
          <h1 className="intro">My name is Jeffrey, and my passion is full stack web development.</h1>
          <h2 className="intro">I build websites with responsive designs and custom APIs.</h2>
          <a rel="noopener noreferrer" href="https://drive.google.com/open?id=1UGvDIs0b1Od43b9OqjjHXcXsLt_zhzlC" target="_blank"><span id="resume">My resume</span></a>
        </div>
      </div>
    );
  }
}
// style="padding-bottom: 5vh;"
  
export default Landing;