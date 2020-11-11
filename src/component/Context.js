import React, { createContext, useReducer } from "react";
import { TransReducer } from "./Reducer";

const initialTransaction = [];

export const TransactionContext = createContext(initialTransaction);

export const TransProvider = ({ children }) => {
  let [state, dispatch] = useReducer(TransReducer, initialTransaction);

  function addTransaction(transObj) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: {
        desc: transObj.desc,
        amount: transObj.amount,
      },
    });
  }
  return (
    <TransactionContext.Provider value={{ transaction: state, addTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
};
