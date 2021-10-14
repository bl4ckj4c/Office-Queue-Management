import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Select from 'react-select'
import { Button, DropdownButton, Dropdown } from 'react-bootstrap'
import axios from 'axios'
import API from './API';
import NavigationBar from './ManagerView';
/* 
export default class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      selectOptions : [],
      id: "",
      name: ''
    }
  }


 
 async getOptions(){
    const res = await axios.get('https://jsonplaceholder.typicode.com/users')
    const data = res.data

    const options = data.map(d => ({
      "value" : d.id,
      "label" : d.name

    }))

    this.setState({selectOptions: options})

  }


  handleChange(ex){
   

    API.selectType(ex)
      .then(() => {
        
      })
  
   this.setState({id:ex.value, name:ex.label})
  }

  componentDidMount(){
      this.getOptions()
  }
 
  render() {
    console.log(this.state.selectOptions)
    return (
      <div>
        <Select options={this.state.selectOptions} onChange={this.handleChange.bind(this)} />
    <p>You have selected <strong>{this.state.name}</strong> whose id is <strong>{this.state.id}</strong></p>
    <Button>ahaadd</Button>
    <DropdownButton id="dropdown-basic-button" title="Dropdown button">
  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
</DropdownButton>
      </div>
    )
  }
} */

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

            <Button>PaginaJacopo</Button>
          </Route>
        </Switch>



      </Router>

    </>
  );


}


export default App;