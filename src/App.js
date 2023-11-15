// import logo from './logo.svg';
import './App.css';

function handleclick(){
  
  alert ("are you sure you want to edit?")
};

function noclick() {
  alert ("are you sure you want to delete?")
}


function App() {
  return (
    <div className="App">
      <div className='header'>
        <h1>TODO APP</h1>

      </div>
      
      <div className='add-btn-div'>
        <button className='btn add-btn'>Add TODO</button>
      </div>
      
      <div className='table-div'>
        <table className='table'>
          <tr className='row-one'>
            <th>#</th>
            <th>Title</th>
            <th>Description</th>
            <th>Date</th>
            <th>Action</th>
          </tr>

          <tr>
            <td>1</td>
            <td>Learn React</td>
            <td>My Name is Maria and i am to learn React with Bro. Micheal</td>
            <td>5/11/23</td>
            <td>
            <div className='action-btn'>
              <button onClick = {handleclick} className='btn edit-btn'>Edit</button>
              <button onClick = {noclick}className='btn delete-btn'>Delete</button>
              </div>
            </td>
          </tr>

          <tr>
            <td>2</td>
            <td>Learn React</td>
            <td>My Name is Maria and i am to learn React with Bro. Micheal</td>
            <td>5/11/23</td>
            <td>
            <div className='action-btn'>
              <button onClick = {handleclick} className='btn edit-btn'>Edit</button>
              <button onClick = {noclick}className='btn delete-btn'>Delete</button>
              </div>
            </td>
          </tr>

          <tr>
            <td>3</td>
            <td>Learn React</td>
            <td>My Name is Maria and i am to learn React with Bro. Micheal</td>
            <td>5/11/23</td>
            <td>
            <div className='action-btn'>
              <button onClick = {handleclick} className='btn edit-btn'>Edit</button>
              <button onClick = {noclick}className='btn delete-btn'>Delete</button>
              </div>
            </td>
          </tr>

          <tr>
            <td>4</td>
            <td>Learn React</td>
            <td>My Name is Maria and i am to learn React with Bro. Micheal</td>
            <td>5/11/23</td>
            <td>
              <div className='action-btn'>
              <button onClick = {handleclick} className='btn edit-btn'>Edit</button>
              <button onClick = {noclick}className='btn delete-btn'>Delete</button>
              </div>
            </td>
          </tr>
        </table>
      </div>
      
      
      
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
