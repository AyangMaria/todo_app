import React from "react";
import { Link, useNavigate, NavigateOptions } from "react-router-dom";

function handleclick(navigate, id) {
  // alert(`are you sure you want to edit TODO #${id}?`);
  navigate("/edit");
}

function noclick(id) {
  alert(`are you sure you want to delete TODO #${id}?`);
}

// function navigate(url) {
//     location.href=url;
// }

function Home() {
  const navigate = useNavigate();
  navigate("/", )
  return (
    <div className="App">
      <div className="header">
        <h1>TODO APP</h1>
      </div>

      <div className="add-btn-div">
        <Link to={"/add"}>
          <button className="btn add-btn">Add TODO</button>
        </Link>
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
            <td>My Name is Maria and i am to learn React with Bro. Michael</td>
            <td>Pending</td>
            <td>5/11/23</td>
            <td>
              <div className="action-btn">
                <button
                  onClick={() => handleclick(navigate, 1)}
                  className="btn edit-btn"
                >
                  Edit
                </button>
                <button onClick={() => noclick(1)} className="btn delete-btn">
                  Delete
                </button>
              </div>
            </td>
          </tr>

          <tr>
            <td>2</td>
            <td>Learn React</td>
            <td>My Name is Maria and i am to learn React with Bro. Michael</td>
            <td>Pending</td>
            <td>5/11/23</td>
            <td>
              <div className="action-btn">
                <button onClick={() => handleclick(navigate, 2)} className="btn edit-btn">
                  Edit
                </button>
                <button onClick={() => noclick(2)} className="btn delete-btn">
                  Delete
                </button>
              </div>
            </td>
          </tr>

          <tr>
            <td>3</td>
            <td>Learn React</td>
            <td>My Name is Maria and i am to learn React with Bro. Michael</td>
            <td>In progress</td>
            <td>5/11/23</td>
            <td>
              <div className="action-btn">
                <button onClick={() => handleclick(navigate, 3)} className="btn edit-btn">
                  Edit
                </button>
                <button onClick={() => noclick(3)} className="btn delete-btn">
                  Delete
                </button>
              </div>
            </td>
          </tr>

          <tr>
            <td>4</td>
            <td>Learn React</td>
            <td>My Name is Maria and i am to learn React with Bro. Michael</td>
            <td>Completed</td>
            <td>5/11/23</td>
            <td>
              <div className="action-btn">
                <button onClick={() => handleclick(navigate, 4)} className="btn edit-btn">
                  Edit
                </button>
                <button onClick={() => noclick(4)} className="btn delete-btn">
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
