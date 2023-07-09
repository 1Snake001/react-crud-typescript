
export interface InputValue {
    name: string;
    email: string;
    address: string;
  };

  export interface FormProps {
    getUserData(): Promise<void>;
    type?: string;
    inputValues: InputValue;
    setInputValues: any;
    id?: string | undefined;
    user?: any;
  }