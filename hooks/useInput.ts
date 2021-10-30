import { ChangeEvent, useState } from 'react';

type UseInput = [string, (e: ChangeEvent<HTMLInputElement>) => void];

const useInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return [value, handleOnChange] as UseInput;
};

export default useInput;
