import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <h1>Welcome to the landing page</h1>

      <PersonCard firstName={"Joel"} lastName={"Schuster"} age={24} hairColor={"brown"}/>
      <PersonCard firstName={"Mike"} lastName={"Jones"} age={37} hairColor={"brown"}/>

    </div>
  );
}

export default App;
