import { useState } from "react";

export const useTextInput = (onSubmit: (value: string) => any) => {
  const [value, setValue] = useState("");

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value);

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onSubmit(value);
      setValue("");
    }
  };

  return {
    value,
    inputProps: {
      onChange,
      onKeyDown,
      value,
      type: "text"
    }
  };
};
