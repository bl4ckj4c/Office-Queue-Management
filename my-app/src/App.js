import React, { Component } from 'react'
import Select from 'react-select'
import axios from 'axios'
import API from './API';

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
      </div>
    )
  }
}