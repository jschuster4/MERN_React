import logo from './logo.svg';
import './App.css';
import React from 'react'
import PersonCard from './components/PersonCard'

function App() {
  return (
    <div className="App">
      <h1> Hello Dojo</h1>
      <h3> Things that I need to do: </h3>
        <p> * Learn React</p>
        <p> * Climb Mt. Everest</p>
        <p> * Run a marathon</p>
        <p> * feed the dogs</p>
        <PersonCard firstName={"Joel"} lastName={"Schuster"} age={"24"} hairColor={"brown"}/>
        <PersonCard firstName={"Mike"} lastName={"Jones"} age={"29"} hairColor={"black"}/>
        <PersonCard firstName={"Samantha"} lastName={"Miller"} age={"46"} hairColor={"black"}/>
        <PersonCard firstName={"Hope"} lastName={"Brown"} age={"19"} hairColor={"black"}/>
    </div>
  );
}

export default App;
