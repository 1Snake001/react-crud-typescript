export interface User {
  id: string;
  name: string;
  email: string;
  address: string;
};

export interface TableProps {
  users: User[];
  getUserData(): Promise<void>;
  setInputValues: any;
};