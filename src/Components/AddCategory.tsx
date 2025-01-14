import { useState } from "react";

type AddCategoryProps = {
  setCategories: React.Dispatch<React.SetStateAction<string[]>>;
};

export const AddCategory = ({ setCategories }: AddCategoryProps) => {
  const [inputValue, setinputValue] = useState("One Punch");

  const onChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setinputValue(target.value);
  };

  const onsubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (inputValue.trim().length <= 1) return;
    setCategories((categories: string[]) => [...categories, inputValue]);
    setinputValue("");
  };
  return (
    <form onSubmit={onsubmit}>
      <input
        type="text"
        placeholder="Buscar Gifts"
        onChange={onChange}
        value={inputValue}
      />
    </form>
  );
};
