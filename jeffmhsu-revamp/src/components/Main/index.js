import React, { Component } from 'react';
import '../../sass/main.scss';
import Landing from './Landing';
import Card from './Card';
import Jeffmhsu from '../../resources/img/jeffmhsu.png';
import Honeycomb from '../../resources/img/honeycomb.png';
import Fixmeadrink from '../../resources/img/fixmeadrink.png';
import Bumblebee from '../../resources/img/bumblebee.png';
import Jscrape from '../../resources/img/jscrape.png';
import CC from '../../resources/img/currencyconverter.PNG';

class Main extends Component{
  render(){
    return(
      <div className="main">
        <Landing />
        <div className="deck">
          <Card image={ Jeffmhsu } title="JeffMHsu [Revamped]" description="Personal website to showcase my work. You're on it right now! Now fully rewritten with React/SASS." tags="React | SASS | AWS S3/Route 53" />
          <Card image={ Honeycomb } title="HoneyComb Guild" description="A website and accompanying API commissioned by a gaming community to recruit new members." tags="React | Express | Node.js | MongoDB | AWS S3/EC2" />
        </div>
        <div className="deck">
          <Card image={ Fixmeadrink } title="Fix Me A Drink" description="A website that provides cocktail recipes. Users can request cocktail recipes by name, ingredient, or randomly." tags="PHP | CSS | AWS EB/EC2" />
          <Card image={ Bumblebee } title="Bumblebee" description="A discord bot that talks about bees. Delivers bee jokes, facts, memes, and more." tags="Node.js | Discord.io | JScrape" />
        </div>
        <div className="deck">
          <Card image={ Jscrape } title="JScrape" description="An easy to use web scraper with a GUI." tags="Java | HtmlUnit | Java Swing" />
          <Card image={ CC } title="Currency Converter" description="Convert USD to up to 168 currencies including cryptocurrency in real time and historically." tags="Java | HttpClient | Java Swing" />
        </div>
      </div>
    );
  }
}

export default Main;