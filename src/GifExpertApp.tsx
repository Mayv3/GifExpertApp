import { useState } from "react";
import { AddCategory } from "./Components/AddCategory";

export const GifExpertApp = () => {
  const [categories, setcategories] = useState(["One punch", "Dragon ball"]);

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory setCategories={setcategories} />

      <ol>
        {categories.map((category, index) => {
          return <li key={index}>{category}</li>;
        })}
      </ol>
      {/* {Gif Item} */}
    </>
  );
};
