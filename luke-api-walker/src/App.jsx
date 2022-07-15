import './App.css';
import {
  Routes,
  Route, 
  Link,
  useNavigate
} from "react-router-dom"
import Navbar from './components/Navbar';
import People from './components/People';
import Planet from './components/Planet';
import { useState } from 'react';

function App() {
  const [starOb, setStarOb] = useState(null)
  const handleStarOb = (starObject) => {
    setStarOb(starObject)
  }
  

  return (
    <div className="App">
      <Navbar starOb={handleStarOb}/>
      
      <Routes>
        <Route path='/people/:id' element={<People starOb={starOb}/>}></Route>
        <Route path='/planet/:id' element={<Planet starOb={starOb}/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
