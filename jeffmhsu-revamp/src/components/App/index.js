import React from 'react';
import "../../sass/style.scss";
import TopBar from '../TopBar';
import Main from '../Main';

const App = () => {
  return (
    <React.Fragment>
      <TopBar />
      <Main />
    </React.Fragment>
  );
}

export default App;
