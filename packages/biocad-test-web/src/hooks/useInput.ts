import { ChangeEvent, useCallback, useState } from 'react';

export const useInput = (initialValue: string | number) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  }, []);

  return [{ value, onChange: handleChange }, () => setValue(initialValue)] as const;
};
