import React, { useState } from "react";
import "./todos.css";
import { deleteall } from "./components/deleteall";
import { deletetodo } from "./components/deletetodo";
import { completedtodo } from "./components/completedtodo";
import { edittodo } from "./components/edittodo";
import { Heading } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";

function Todos() {
  const [todos, settodos] = useState([]);
  const [todo, settodo] = useState("");
  const [todoediting, settodoediting] = useState("");
  const [editingtext, seteditingtext] = useState(null);

  function handlesubmit(e) {

    e.preventDefault();
    if (todo) {
      const newtodo = {
        id: new Date().getTime(),
        text: todo,
        completed: false,
      };
      settodos([...todos, newtodo]);
      settodo("");
    } else {
      window.alert("Cannot Add Blank ToDO");
    }
  }

  return (
    <div >
      <div className="HeadingDeleteAllButton">
        <Heading size='md' className="TodoHeading">Goals</Heading>
        <button onClick={() => deleteall(settodos)}>reload</button>

      </div>

      <form className="form" onSubmit={handlesubmit}>
        {/* <Input variant='flushed' placeholder='Flushed' /> */}
        <Input variant='flushed'
          type="text"
          onChange={(e) => settodo(e.target.value)}
          value={todo}
        />
        {/* <button type="submit">submit</button> */}
      </form>




      {todos.map((todo) => (

        <ul
          onDoubleClick={() => deletetodo(settodos, todos, todo.id)}
          id="deleteCursor"
        >






          {todoediting === todo.id ? (
            <form >
              <button
                id="editbutton"
                type="submit" hidden
                onClick={() =>
                  edittodo(
                    todos,
                    editingtext,
                    settodos,
                    settodoediting,
                    seteditingtext,
                    todo.id
                  )
                }
              >

              </button>
              <input
                id="edittextbox"
                type="text"
                defaultValue={todo.text}
                onChange={(e) => seteditingtext(e.target.value)}
              />{" "}
            </form>
          ) : (

            <div id="todolist" className={todo.completed ? "strike" : ""}>
              
              <input
              type="checkbox"
              id="_checkbox"
              onClick={(e) => completedtodo(settodos, todos, todo.id)}
            ></input>
            
            
             {todo.text}


              <div>           
                 <button
                id="edittodo"

                onClick={() => settodoediting(todo.id)}
              >
                edit{" "}
              </button>

              
              </div>

            </div>)}





        </ul>
      ))}
    </div>
  );
}

export default Todos;
