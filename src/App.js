import logo from './platzi.webp';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import { CreatetoDoButton } from './CreateButton';
import './App.css';




function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
         Hola mundo
        </p>
      
      <TodoCounter></TodoCounter>
      <TodoSearch></TodoSearch>
      <TodoList>
      <TodoItem></TodoItem>
      <TodoItem></TodoItem>
      <TodoItem></TodoItem>
      </TodoList>
      <CreatetoDoButton></CreatetoDoButton>
      </header>
    </div>
  );
}

export default App;



