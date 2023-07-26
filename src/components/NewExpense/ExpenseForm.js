import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [eneterdTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredTitle: event.target.value
    // })
    // setUserInput((prevState) => ({
    //   ...prevState,
    //   enteredTitle: event.target.value,
    // }));
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: eneterdTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);

    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  //   const inputChangeHandler = (identifier,value)=>{
  //     if(identifier === 'title'){
  //         setEnteredTitle(value);
  //     }
  //     else if(identifier === 'amount'){
  //         setEnteredAmount(value);
  //     }
  //     else{
  //         setEnteredDate(value);
  //     }
  //   }

  //***** MY WAY ***********************/
  // const [userInput,setUserInput] = useState({});
  // console.log(userInput);

  // const changeHandler = (event) => {
  //     setUserInput({...userInput,[event.target.name]: event.target.value})
  // }
  /*************************************/

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          {/* <input type="text" onChange={(event) =>inputChangeHandler('title',event.target.value)} /> */}
          <input
            type="text"
            value={eneterdTitle}
            onChange={titleChangeHandler}
          />
          {/* <input type="text" name="title" onChange={changeHandler}/> */}
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
          {/* <input type="number" name="amount" min="0.01" step="0.01" onChange={changeHandler} /> */}
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
          {/* <input type="date" name="date" min="2019-01-01" max="2023-12-31" onChange={changeHandler}/> */}
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
