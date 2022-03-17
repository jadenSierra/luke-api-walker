import ApiDisplay from './Components/ApiDisplay';
import ApiInput from './Components/ApiInput';
import './App.css';
import React, {useState} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <ApiInput />
        <Switch>
          <Route path="/:search/:id">
            <ApiDisplay />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
