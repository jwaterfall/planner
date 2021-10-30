import { useState } from 'react';

type UseToggle = [boolean, () => void];

const useToggle = (initialValue: boolean = false) => {
  const [value, setValue] = useState(initialValue);

  const toggleValue = () => {
    setValue((old) => !old);
  };

  return [value, toggleValue] as UseToggle;
};

export default useToggle;
