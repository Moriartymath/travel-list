import { useState } from "react";
import "./Form.css";
import PackItemType from "../PackingList/PackItem/PackItemType";

type FormProps = {
  items: Array<PackItemType>;
  setItems: Function;
};

function Form({ setItems }) {
  const [itemCount, setItemCount] = useState(1);
  const [itemName, setItemName] = useState("");

  return (
    <form
      className="form"
      onSubmit={(ev) => {
        ev.preventDefault();
        setItems((currItems: Array<PackItemType>) => [
          ...currItems,
          {
            itemName,
            itemCount,
            packed: false,
            id: currItems.length ? currItems.at(-1).id + 1 : 0,
          },
        ]);
      }}
    >
      <p className="question">What do you need for your 🥰 trip?</p>
      <input
        type="number"
        min={1}
        step={1}
        value={itemCount}
        className="input input--count"
        onChange={(ev) => setItemCount(+ev.target.value)}
      />
      <input
        type="text"
        placeholder="Item..."
        value={itemName}
        className="input input--text"
        onChange={(ev) => setItemName(ev.target.value)}
      />
      <button className="submit--button">ADD</button>
    </form>
  );
}

export default Form;
