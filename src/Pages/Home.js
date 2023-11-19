import React from "react";
import { Link } from "react-router-dom";

function handleclick(id) {
  alert(`are you sure you want to edit TODO #${id}?`);
}

function noclick() {
  alert("are you sure you want to delete?");
}

// function navigate(url) {
//     location.href=url;
// }

function Home() {
  return (
    <div className="App">
      <div className="header">
        <h1>TODO APP</h1>
      </div>

      <div className="add-btn-div">
        <Link to={"/add"}><button className="btn add-btn">Add TODO</button></Link>
      </div>

      <div className="table-div">
        <table className="table">
          <tr className="row-one">
            <th>#</th>
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
            <th>Date</th>
            <th>Action</th>
          </tr>

          <tr>
            <td>1</td>
            <td>Learn React</td>
            <td>My Name is Maria and i am to learn React with Bro. Micheal</td>
            <td>Pending</td>
            <td>5/11/23</td>
            <td>
              <div className="action-btn">
                <button onClick={() => handleclick(1)} className="btn edit-btn">
                  Edit
                </button>
                <button onClick={noclick} className="btn delete-btn">
                  Delete
                </button>
              </div>
            </td>
          </tr>

          <tr>
            <td>2</td>
            <td>Learn React</td>
            <td>My Name is Maria and i am to learn React with Bro. Micheal</td>
            <td>Pending</td>
            <td>5/11/23</td>
            <td>
              <div className="action-btn">
                <button onClick={() => handleclick(2)} className="btn edit-btn">
                  Edit
                </button>
                <button onClick={noclick} className="btn delete-btn">
                  Delete
                </button>
              </div>
            </td>
          </tr>

          <tr>
            <td>3</td>
            <td>Learn React</td>
            <td>My Name is Maria and i am to learn React with Bro. Micheal</td>
            <td>In progress</td>
            <td>5/11/23</td>
            <td>
              <div className="action-btn">
                <button onClick={() => handleclick(3)} className="btn edit-btn">
                  Edit
                </button>
                <button onClick={noclick} className="btn delete-btn">
                  Delete
                </button>
              </div>
            </td>
          </tr>

          <tr>
            <td>4</td>
            <td>Learn React</td>
            <td>My Name is Maria and i am to learn React with Bro. Micheal</td>
            <td>Completed</td>
            <td>5/11/23</td>
            <td>
              <div className="action-btn">
                <button onClick={() => handleclick(4)} className="btn edit-btn">
                  Edit
                </button>
                <button onClick={noclick} className="btn delete-btn">
                  Delete
                </button>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Home;
