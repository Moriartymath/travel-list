import { useState } from "react";
import "./Form.css";
function Form() {
  const [amount, setAmount] = useState(1);
  const [itemName, setItemName] = useState("");

  console.log(itemName);
  return (
    <form className="form">
      <p className="question">What do you need for your 🥰 trip?</p>
      <input
        type="number"
        min={1}
        step={1}
        value={amount}
        className="input input--count"
        onChange={(ev) => setAmount(+ev.target.value)}
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
