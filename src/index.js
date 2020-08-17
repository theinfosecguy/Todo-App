import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./todoList.css";
import TodoList from './todo'

var destination = document.querySelector("#root");

ReactDOM.render(
    <TodoList/>
    ,destination
);