import { useState, ChangeEvent } from "react";

const useInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return [value, handleOnChange];
};

export default useInput;
