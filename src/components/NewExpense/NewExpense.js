import React, { useState } from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

  const [status,setStatus] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData)
  }

  const clickHandler = () => {
    setStatus(!status);
  }

  const cancelHandler = () => {
    setStatus(!status);
  }

  if(!status){
    return <div className="new-expense"><button onClick={clickHandler}>Add New Expense</button></div>
  }

  return <div className="new-expense">
    <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={cancelHandler}/>
  </div>;
};

export default NewExpense;
