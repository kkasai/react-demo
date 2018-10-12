import React, { Component } from 'react';
import axios from 'axios';

class PersonRegister extends Component {
  constructor(props){
    super(props);
    this.form = React.createRef();
    this.state = {
      name: "",
      age: ""
    }
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = {name: this.state.name, age: this.state.age};
    axios
      .post("http://localhost:8080/person", data)
      .then(response => {
        this.props.getPersonList();
        this.form.current.reset();
      })
      .catch(error => {
        console.log("error: ", error)
      });
  }

  render() {
    return (
      <div className="PersonRegister">
        <form onSubmit={e => this.handleSubmit(e)} ref={this.form}>
          <label htmlFor="name">name</label>
          <input id="name" name="name" type="text" onChange={e => this.handleChange(e)}/>
          <label htmlFor="content">age</label>
          <input id="age" name="age" type={"text"} onChange={e => this.handleChange(e)}/>
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}

export default PersonRegister;
