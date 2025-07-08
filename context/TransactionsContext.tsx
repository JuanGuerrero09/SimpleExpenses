import { Transaction } from "@/components/TransactionList";
import { createContext } from "react";

type State = {
  transactions: Transaction[];
};

const TransactionsContext = createContext