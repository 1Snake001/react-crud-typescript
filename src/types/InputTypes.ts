export interface InputProp {
    name: string;
    errorMessage:string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    inputValue?: string;
    onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  }