// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import AddTodo from './Pages/AddTodo';


function App() {
  return (
    <div>
      <Routes>
      <Route path="/" Component={Home} />
      <Route path="/add" Component={AddTodo} />
      </Routes>
    </div>
  );
}

export default App;
