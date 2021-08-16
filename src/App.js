import React from 'react';
import {CardList} from './components/card-list/card-list.component';
import './App.css';
import {SearchBox} from './components/search-box/search-box.component';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      instruments: [],
      searchField: ''
  };
}  

componentDidMount(){
  fetch("https://raw.githubusercontent.com/Allwaves369/mockjson/main/dbnew.json")
   .then(response => response.json())
   .then(users => this.setState({ instruments: users }));
  };

  handleChange = x => {
    this.setState({searchField: x.target.value});
  };

  render() {
    const { instruments, searchField } = this.state;
    const filteredInstruments = instruments.filter(instrument =>
      instrument.name.toLowerCase().includes(searchField.toLowerCase())
      ); 
    return (
      <div className="App">
        <h1> Indian Instruments </h1>
        <SearchBox
          placeholder='search instruments'
          handleChange = {this.handleChange}
        />
        <CardList instruments={filteredInstruments} />
      </div>
    ); 
  }
}

export default App;
