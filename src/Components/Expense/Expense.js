import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "../NewExpenses/ExpenseFilter";
import "./Expense.css";

const Expense = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {props.items.map((expense,i)=>{

          console.log("expense----",expense);
          return <ExpenseItem
           title={expense.title}
           amount={expense.amount}
           date={expense.date}
           key={i}
           />
        }
         
        )}
        
      </Card>
    </div>
  );
};
export default Expense;
