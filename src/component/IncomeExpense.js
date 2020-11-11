import React, { useContext } from "react";
import { TransactionContext } from "./Context";

export const IncomeExpense = () => {
  let { transaction } = useContext(TransactionContext);
  const getIncome = () => {
    let income = 0;
    for (var i = 0; i < transaction.length; i++) {
      if (transaction[i].amount > 0) income += transaction[i].amount;
    }
    return income;
  };
  const getExpense = () => {
    let expense = 0;
    for (var i = 0; i < transaction.length; i++) {
      if (transaction[i].amount < 0) expense += transaction[i].amount;
    }
    return expense;
  };
  return (
    <>
      <div className="balance">
        <h4>Your Balance</h4>
        <h1>${getIncome() + getExpense()}</h1>
      </div>
      <div className="income">
        <div>
          <h4 style={{ color: "#2ecc71" }}>Income</h4>
          <p className="money plus">${getIncome()}</p>
        </div>
        <div>
          <h4 style={{ color: "#c0392b" }}>Expense</h4>
          <p className="money minus">${getExpense()}</p>
        </div>
      </div>
    </>
  );
};
