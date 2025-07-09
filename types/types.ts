// types/types.ts
export interface Transaction {
  id: string;
  title: string;
  amount: number;
  category: string;
  date: Date;
}

export type DateCategory = 'today' | 'this_week' | 'this_month' | 'this_year' | 'older';

export interface State {
  transactions: Transaction[];
}

export type Action =
  | { type: 'ADD_TRANSACTION'; payload: Transaction }
  | { type: 'DELETE_TRANSACTION'; payload: string };
