import React, {Component} from 'react';
// import starwars from './starwars.svg';
import './App.css';
import CardList from './CardList';

class App extends Component {
  constructor() {
    super()
    this.state = {
      citizen: [],
      lekha: true
    }
  }

  componentDidMount(){
    // fetch is a method on Window object
    fetch('https://swapi.co/api/people/4/')
    .then(resp => resp.json())
    .then(data => this.setState( {citizen:data} ));
  }

  render() {
    // destructuring from the state variable
    const {citizen} = this.state
    
    if (citizen.length === 0){
      return <h1>Loading</h1>
    } else {
      return (
        <div className='tc'>
          <h1 className='f1'> People of StarWars </h1>
          <CardList prop={citizen} />
        </div>
      );
    }
    

  }
}

export default App;
