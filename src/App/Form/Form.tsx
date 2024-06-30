import "./Form.css";
function Form() {
  return (
    <form className="form">
      <p className="question">What do you need for your 🥰 trip?</p>
      <input
        type="number"
        min={1}
        step={1}
        defaultValue={1}
        className="input input--count"
      />
      <input type="text" placeholder="Item..." />
      <button>ADD</button>
    </form>
  );
}

export default Form;
