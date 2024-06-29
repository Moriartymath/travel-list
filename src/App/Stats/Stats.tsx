import "./Stats.css";
import PackItemType from "../PackingList/PackItem/PackItemType";

function Stats({ items }) {
  return (
    <>
      <p>
        You packed {items.length} on your list, and you already packed{" "}
        {items.filter((item: PackItemType) => item.packed).length}
      </p>
    </>
  );
}

export default Stats;
