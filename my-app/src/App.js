import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Select from 'react-select'
import { Button, DropdownButton, Dropdown } from 'react-bootstrap'
import axios from 'axios'
import API from './API';
import NavigationBar from './ManagerView';
import Customer from './Components/Customer.js';
import Officer from './Components/officer.js';
import ManagerView from './ManagerView';

function App() {

  return (
    <>
      <Router>
        <Switch>

          <Route exact path="/">
            <Button>Pagina/</Button>
          </Route>

          <Route exact path="/andrea">
            <ManagerView/>
          </Route>

          <Route exact path="/officer">
            <Officer></Officer>
          </Route>

          <Route exact path="/customer">
            <Customer></Customer>
          </Route>

        </Switch>
      </Router>

    </>
  );


}


export default App;