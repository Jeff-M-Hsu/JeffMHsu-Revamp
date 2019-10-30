import React, { Component } from 'react';
import '../../sass/topbar.scss';
import Instagram from '../../resources/icons/ig.png';
import Linkedin from '../../resources/icons/in.png';
import Github from '../../resources/icons/oc.png';
import Email from '../../resources/icons/em.png';
import { Link } from 'react-router-dom';

class TopBar extends Component{
  render(){
    return(
      <div className="topbar">
        <div className="link-container">
        <Link to={"/"} id="title">Jeffrey Hsu</Link>
        </div>
        <div id="social-media">
          <a className="icon-link" rel="noopener noreferrer" href="https://www.instagram.com/jeffhsu42/" target="_blank"><img className="icon" alt="Instagram logo" src={ Instagram }></img></a>
          <a className="icon-link" rel="noopener noreferrer" href="www.linkedin.com/in/jeffreyhsu42" target="_blank"><img className="icon" alt="Linkedin logo" src={ Linkedin }></img></a>
          <a className="icon-link" rel="noopener noreferrer" href="https://github.com/Jeff-M-Hsu" target="_blank"><img className="icon" alt="Github logo" src={ Github }></img></a>
          <a className="icon-link" rel="noopener noreferrer" href="mailto:jeffreyhsu42@gmail.com" target="_blank"><img className="icon" alt="Email icon" id="email" src={ Email }></img></a>
        </div>
      </div>
    );
  }
}
  
export default TopBar;