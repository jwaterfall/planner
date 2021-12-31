import { ChangeEvent, useState } from 'react';

type Event = ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>;

type UseInput = [string, (e: Event) => void, (newValue: string) => void];

const useInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);

  const handleOnChange = (e: Event) => {
    setValue(e.target.value);
  };

  return [value, handleOnChange, setValue] as UseInput;
};

export default useInput;
