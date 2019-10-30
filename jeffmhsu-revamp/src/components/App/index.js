import React from 'react';
import "../../sass/style.scss";
import TopBar from '../TopBar';
import Main from '../Main';
import Page from '../Pages';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import JHsuComponents from '../../resources/img/jhsu-components.png';
import Jeffmhsu from '../../resources/img/jeffmhsu.png';
import Honeycomb from '../../resources/img/honeycomb.png';
import Fixmeadrink from '../../resources/img/fixmeadrink.png';
import Bumblebee from '../../resources/img/bumblebee.png';
import Jscrape from '../../resources/img/jscrape.png';
import CC from '../../resources/img/currencyconverter.PNG';
import Soon from '../../resources/img/soon.png';

const App = () => {
  return (
  <Router>
    <React.Fragment>
      <TopBar />
        <Switch>
          <Route exact path='/' component={
            () => <Main 
              jhsucomponents={JHsuComponents}
              jeffmhsu={Jeffmhsu}
              honeycomb={Honeycomb}
              fixmeadrink={Fixmeadrink}
              bumblebee={Bumblebee}
              jscrape={Jscrape}
              cc={CC}
              wip={Soon}
            />}
          />
          <Route exact path='/jhsucomponents' component={
            () => <Page 
              title="JHsu Components" 
              img={JHsuComponents} 
              date="October 2019 - ongoing" 
              purpose="Personal Project" 
              stack="React | Styled Components | Storybook | Jest | NPM" 
              ext="https://www.npmjs.com/package/jhsu-components" 
              description="JHsu Components is a library of Styled Components in React, and is available on npm. JHsu Components will provide a central resource for me 
                to easily re-use components across projects, and I intend on using this library going forward to design various websites and web applications 
                to further hone my design skills as well as showcase the versatility that JHsu Components will have. Right now I am working on 
								implementing at least one component from conception to implementation to testing per day while I work on other projects, and I'm planning  
                on creating a professional website using JHsu Components before the end of the year."
            />}
          />
          <Route exact path='/jeffmhsu' component={
            () => <Page
              title="JeffMHsu.com"
              img={Jeffmhsu}
              date="July-August, 2019"
              purpose="Personal Project"
              stack="React | SASS | AWS S3/Route 53"
              ext="https://github.com/Jeff-M-Hsu/JeffMHsu-Revamp"
              description="JeffMHsu.com is my personal website that I designed and built from scratch
                as a way to increase my online presence and have a personalized, visually 
                comprehensive source to display my work. The design is modern, clean, professional, 
                and has a responsive layout that transforms to support phones, tablets, 
                as well as 2K and 4K displays on top of the typical laptop/desktop resolutions. 
                This website also qualifies as a Progressive Web App, and is capable of being viewed 
                and navigated offline and as a standalone desktop/mobile app."
            />} 
          />
          <Route exact path='/honeycombguild' component={
            () => <Page
              title="HoneyComb Guild"
              img={Honeycomb}
              date="June-July, 2019"
              purpose="Commission"
              stack="React | CSS (Bootstrap) | Express | Node.js | MongoDB | AWS S3/EC2"
              ext="http://tinyurl.com/honeycombguild"
              description="A gaming community named HoneyComb commissioned me to build a website for them to 
                recruit new members with. It was designed in collaboration with the community leader and 
                has a responsive layout that tranforms to support mobile, tablet, 2K/4K displays on top of 
                the typical laptop/desktop resolutions. They also requested the ability to display bee jokes and facts on the website through an interactive medium. 
                I fulfilled this request by creating a database of bee related information and an API that links to it. 
                My choice to use react as the front end of the site was to give this feature the requested interactivity, although 
                Angular would have been a great alternative."
            />} 
          />
          <Route exact path='/fixmeadrink' component={
            () => <Page
              title="Fix Me A Drink"
              img={Fixmeadrink}
              date="August, 2019"
              purpose="Personal Project"
              stack="PHP | CSS | AWS EB/EC2"
              ext="http://tinyurl.com/fixmeadrink"
              description="A website that consumes TheCocktailDB API to output recipes of cocktails. The user can 
                request a random cocktail or search for recipes by name or by ingredient. This website also 
                has a responsive layout that supports mobile and 2K/4K resolutions. I built this website to get a feel for 
                using PHP and practicing my design skills. It has also opened my eyes to some very strange cocktails, one of the recipes 
                has several paragraphs detailing how to cook ribs in order to collect its fat for a mezcal based drink!"
            />} 
          />
          <Route exact path='/bumblebee' component={
            () => <Page
              title="Bumblebee"
              img={Bumblebee}
              date="February-March, 2019"
              purpose="Commission"
              stack="Node.js | Discord.io"
              ext="https://github.com/Jeff-M-Hsu/Bumblebee"
              description="A gaming community named HoneyComb asked me to create a Discord bot for their server to provide more 
                personality to the server based on their theme. I created a bot that listens to keywords and sends corresponding 
                messages back. The success of this project resulted in being commissioned to buid the HoneyComb website. 
                I had to source all of the bee jokes, facts, pick up lines, etc. on my own, so I built a web scraper to aid in scouring 
                pages for content and a separate program to unify the formatting of hundreds of messages. That web scraper is now its 
                own product named JScrape."
            />} 
          />
          <Route exact path='/jscrape' component={
            () => <Page
              title="JScrape"
              img={Jscrape}
              date="April, 2019"
              purpose="Developer Tool"
              stack="Java | Swing | HtmlUnit"
              ext="https://github.com/Jeff-M-Hsu/JScrape"
              description="I built a web scraper in Java to semi-automate data gathering and greatly improve efficiency while working on 
                Bumblebee. I chose Java because at the time it was the language I was most proficient with. I chose HtmlUnit over JSoup because 
                I felt that HtmlUnit would be a better tool to learn as it is typically used for testing web applications while being capable of being used 
                for web scraping, which is more applicable to the type of development that I am pursuing. I also decided to make a GUI for it to make it easier 
                to use and more accessible."
            />} 
          />
          <Route exact path='/currencyconverter' component={
            () => <Page
              title="Currency Converter"
              img={CC}
              date="2017"
              purpose="Personal Project"
              stack="Java | Swing | HttpClient"
              ext="https://github.com/Jeff-M-Hsu/Currency-Converter"
              description="I created a desktop application to consume the currencylayer API. The currencylayer API holds records of both updated and historical 
                currency exchange rates for over 168 currencies, including cryptocurrency such as Bitcoin. I wrote the program as a way of getting more 
                practice with Java, Swing, and to learn about HttpClient, which provides a lightweight solution for sending requests to the API."
            />} 
          />
          <Route exact path='/keeper' component={
            () => <Page 
              title="Keeper" 
              img={Soon} 
              date="October 2019 - ongoing" 
              purpose="Personal Project" 
              stack="React | TailwindCSS | Back End TBD" 
              ext="https://github.com/Jeff-M-Hsu/Keeper" 
              description="A Progressive Web Application personal management system built with React and TailwindCSS. Right now this project is on ice while 
                I work on some other things, although I am hoping to return to it once JHsu Components becomes a more mature library in order to use it  
                to recreate this app. Right now it's more of a supplementary testing suite and playground for JHsu Components."
            />}
          />
        </Switch>
      </React.Fragment>
    </Router>
  );
}

export default App;
