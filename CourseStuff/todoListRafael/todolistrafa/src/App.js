import TodoList from './TodoList'
import './App.css';

function App() {
  return (
    <div className="App">
      <TodoList />
      <TodoList title="Teste 2" />
      <TodoList title="Teste 3"/>
    </div>
  );
}

export default App;
