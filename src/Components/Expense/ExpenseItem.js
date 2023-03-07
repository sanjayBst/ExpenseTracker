// import React, { useState } from "react";

import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  //  console.log(props)
  // const [title,setTitle] = useState(props.title);

  //  const clickHandler = () =>{
  //   setTitle('Updated !!')
  //   console.log(title)
  // }
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">Rs.{props.amount}</div>
        </div>
        {/* <button onClick={clickHandler}>Change Title </button> */}
      </Card>
    </li>
  );
};
export default ExpenseItem;
