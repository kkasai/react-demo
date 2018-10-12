import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import PersonContent from './components/PersonContent';
import PersonContext from './context/Person';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personList: [],
    }
  }

  componentDidMount() {
    this.getPersonList();
  }

  getPersonList() {
    axios
      .get("http://localhost:8080/person")
      .then(response => {
        const data = response.data;
        this.setState({
          personList: data
        })
      })
      .catch(error =>{
        console.log(error);
      })
  }

  render() {
    return (
      <div className="App">
        <PersonContext.Provider value={{
          personList: this.state.personList,
          getPersonList: () => this.getPersonList()
        }}>
          <PersonContent />
        </PersonContext.Provider>
      </div>
    );
  }
}

export default App;
