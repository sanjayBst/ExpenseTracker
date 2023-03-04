import React, {useState} from "react";

// import "./App.css";
import Expense from './Components/Expense/Expense'
import NewExpense from "./Components/NewExpenses/NewExpenses";
 
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 5000,
    date: new Date(2023, 1, 26),
  },
  {
    id: "e2",
    title: "New iPad",
    amount: 27000,
    date: new Date(2023, 1, 26),
  },
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e4",
    title: "New Desk ",
    amount: 4500,
    date: new Date(2021, 5, 12),
  }
];
const App =() => {

  
    const [expenses,setExpenses] = useState(DUMMY_EXPENSES);
    
    const addExpenseHandler = (expense) => {
      
      setExpenses((prevExpenses) => {
        return [expense, ...prevExpenses];
      });
    };
  
  

  return (
    <div className="App">
      <h1>Hola</h1>
     <NewExpense onAddExpense={addExpenseHandler}/>
     <Expense items={expenses} />
    </div>
  );
}

export default App;
