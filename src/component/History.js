import React, { useContext } from "react";
import { TransactionContext } from "./Context";

export const History = () => {
  let { transaction } = useContext(TransactionContext);
  return (
    <div>
      <h4>History</h4>
      <hr />
      <ul className="listitem">
        {transaction.map((transObj, ind) => {
          return (
            <li key={ind}>
              {transObj.desc} <span>{transObj.amount}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
