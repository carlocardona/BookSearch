import React, { useReducer, useRef } from "react";
import "./App.css";

const TodoList = () => {

  const inputRef = useRef();

  const [items, dispatch] = useReducer((items, action) => {
    console.log(inputRef.current.value);
    if (action === "add") {
      const value = inputRef.current.value;
      return [...items, value];
    }

    if (action.type === "delete"){
      return items.filter((item,index) => index !== action.index)
    }
    return items;
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="container text-center">
      <h1>Create a Todo List!</h1>
      <form className="form-group mt-5" onSubmit={handleSubmit}>
        <input className="form-control" placeholder="Start typing what you need to do..." ref={inputRef} />
        <button className="btn btn-success mt-3 mb-5" type="submit" onClick={() => dispatch("add")}>
          Add to List
        </button>
      </form>
      <h4>My Todo List:</h4>
      <ul className="list-group">
        {items.map((item, index) => (
          <li className="list-group-item" key={index}>
            {item}{" "}
            <button onClick={() => dispatch({type: "delete", index: index})}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
