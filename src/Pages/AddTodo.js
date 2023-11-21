import React from "react";
import { Form } from "react-router-dom";

function AddTodo() {
    return (
        <div className="TodoPage" > 
            <div className="Todo-header">Add Todo Page</div>

            <div className="Form-div">
                <form>
                    <label for="Title">Title</label>
                    <input type="text" id="Title" name="Title"/>

                    <label for="Description"> Description</label>
                    <input type="text" id="Description" name="Description"/>

                    <label for="Date">Date</label>
                    <input type="date" id="Date" name="Date"/>

                    <label for="Status">Status</label>
                    <select id="Status" name="Status">
                    <option value = "pending">Pending</option>
                    <option value = "Inprogress">In Progress</option>
                    <option value = "Completed">Completed</option>
                   </select>

                   <div className="btn-div"><button className="new-btn add-btn">ADD TODO</button></div>

                </form>
            </div>


        </div>
    )
}

export default AddTodo;