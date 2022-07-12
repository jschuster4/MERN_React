import './App.css';
import { useState } from 'react';
import TdList from './components/TdList';
import TdResults from './components/TdResults';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

function App() {
  const [allTasks, setAllTasks] = useState([]);
  const addTask = chore => {
    setAllTasks([...allTasks, chore]);
  }

  const handleCheck = (index) => {
    allTasks[index].isComplete = !allTasks[index].isComplete
    setAllTasks([...allTasks])
  }

  const deleteTask = (index) => {
    allTasks.splice(index, 1);
    setAllTasks([...allTasks])
  }

  return (
    <div className="App" >
      <h1>To Do List</h1>
      <div style={{display: 'flex', justifyContent: 'space-around'}}>
        <div>
          <TdList newTask={addTask}/>
        </div>
        <div>
          <TdResults AllTasks={allTasks} toggleCheck={handleCheck} delete={deleteTask}/>
        </div>
      </div>
    </div>
  );
}

export default App;
