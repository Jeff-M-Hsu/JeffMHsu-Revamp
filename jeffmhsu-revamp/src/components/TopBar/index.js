import React, { Component } from 'react';
import '../../sass/topbar.scss';
import Instagram from '../../resources/icons/ig.png';
import Linkedin from '../../resources/icons/in.png';
import Github from '../../resources/icons/oc.png';
import Email from '../../resources/icons/em.png';

class TopBar extends Component{
  render(){
    return(
      <div className="topbar">
        <a href="/" id="title">Jeffrey Hsu</a>
        <div id="social-media">
          <a className="icon-link" href="https://www.instagram.com/jeffhsu42/" target="_blank"><img className="icon" src={ Instagram }></img></a>
          <a className="icon-link" href="https://www.linkedin.com/in/jeffrey-hsu-54a232122/" target="_blank"><img className="icon" src={ Linkedin }></img></a>
          <a className="icon-link" href="https://github.com/Jeff-M-Hsu" target="_blank"><img className="icon" src={ Github }></img></a>
          <a className="icon-link" href="mailto:jeff_m_hsu@hotmail.com" target="_blank"><img className="icon" id="email" src={ Email }></img></a>
        </div>
      </div>
    );
  }
}
  
export default TopBar;