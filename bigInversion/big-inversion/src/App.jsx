import logo from './logo.svg';
import './App.css';
import PersonCard from './components/personCard';

function App() {
  return (
    <div className="App">
      <h1>Here is the landing page</h1>
      <PersonCard firstName="John" lastName="Smith" age={ 19 } hairColor="Brown" /> 
      <PersonCard firstName="Sally" lastName="May" age={ 22 } hairColor="Blonde" /> 
      <PersonCard firstName="Ashley" lastName="Miller" age={ 35 } hairColor="Black" /> 
    </div>
  );
}

export default App;
