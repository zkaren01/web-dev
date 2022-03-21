import React from "react";
import {Link} from "react-router-dom";
import Classes from "./classes";
import Styles from "./styles";
import ConditionalOutput from "./conditional-output";
import ToDoList from "./todo/ToDoList";

const Index = () => {
  return(
      <>
        <h1>Labs</h1>
        <ToDoList/>
        <ConditionalOutput/>
        <Styles/>
        <Classes/>
        <Link to="/hello">
          Hello
        </Link> |
        <Link to="/tuiter">
          Tuiter
        </Link>
      </>
)
};

export default Index;