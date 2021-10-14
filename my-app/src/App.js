import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Select from 'react-select'
import { Button, DropdownButton, Dropdown } from 'react-bootstrap'
import axios from 'axios'
import API from './API';
import NavigationBar from './ManagerView';
import Customer from './Components/customer.js';

function App() {

  return (
    <>
      <Router>
        <Switch>

          <Route exact path="/">
            <Button>Pagina/</Button>
          </Route>

          <Route exact path="/andrea">
            <Button>PaginaAndrea</Button>
          </Route>

          <Route exact path="/bruno">
            <Button>PaginaBruno</Button>
          </Route>

          <Route exact path="/jacopo">
            <Customer></Customer>
          </Route>

        </Switch>
      </Router>

    </>
  );


}


export default App;