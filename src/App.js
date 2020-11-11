import React from "react";
import "./App.css";
import { Header } from "./component/Header";
// import { Balance } from "./component/Balance";
import { IncomeExpense } from "./component/IncomeExpense";
// import { History } from "./component/History";
import { Transaction } from "./component/Transaction";
import { TransProvider } from "./component/Context";

export const App = () => {
  return (
    <div className="container">
      <TransProvider>
        <Header />
        {/* <Balance /> */}
        <IncomeExpense />
        {/* <History /> */}
        <Transaction />
      </TransProvider>
    </div>
  );
};
