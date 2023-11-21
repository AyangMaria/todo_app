// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import AddTodo from './Pages/AddTodo';
import EditTodo from './Pages/Edit.Todo';


function App() {
  return (
    <div>
      <Routes>
      <Route path="/" Component={Home} />
      <Route path="/add" Component={AddTodo} />
      <Route path="/edit" Component={EditTodo}/>
      </Routes>
    </div>
  );
}

export default App;
