
export interface USER_BRANCH_INTERFACE {
  _id: string,
  name: string,
  balance: number
}

export interface USER_TRANSACTION_INTERFACE {
  _id?: string;
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

export const defaultTransaction: USER_TRANSACTION_INTERFACE = {
  type: '',
  from: { id: '', name: '' },
  to: { id: '', name: '' },
  amount: 0,
  note: '',
  createdAt: '',
};

export interface USER_INTERFACE {
  id: string;
  name: string;
  email: string;
  branches: USER_BRANCH_INTERFACE[];
  transactions: USER_TRANSACTION_INTERFACE[];
}
