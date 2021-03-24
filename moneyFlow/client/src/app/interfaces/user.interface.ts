
interface USER_BRANCH_INTERFACE {
  _id: string,
  name: string,
  balance: number
}

interface USER_TRANSACTION_INTERFACE {
  _id: string;
  type: string;
  from: {
    id: string;
    name: string;
  },
  to: {
    id: string;
    name: string
  },
  amount: number;
  note: string;
  createdAt: string;
}

export interface USER_INTERFACE {
  name: string;
  email: string;
  branches: USER_BRANCH_INTERFACE[];
  transactions: USER_TRANSACTION_INTERFACE[];
}
