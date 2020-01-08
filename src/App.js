import React from 'react';
import Mainpage from './Mainpage';
import GreetingPage from './GreetingPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <main className="App">
      <Switch>
        <Route path='/' component={GreetingPage} exact/>
        <Route path='/mainpage' component={Mainpage} />
      </Switch>
    </main>
  );
}

export default App;
