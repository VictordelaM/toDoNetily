import './App.css'
import ToDoList from './assets/component/toDoList/toDoList';
import toDos from './assets/data/toDo';

function App() {
  return (
    <>
      <ToDoList toDos = {toDos}/>
    </>
  )
}

export default App
