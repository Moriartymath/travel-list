import "./ClearList.css";

type ClearListProps = {
  setItems: Function;
};

function ClearList({ setItems }) {
  return (
    <button className="clear--list" onClick={() => setItems([])}>
      Clear list
    </button>
  );
}

export default ClearList;
