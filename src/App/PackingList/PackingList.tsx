import "./PackingList.css";
import PackItem from "./PackItem/PackItem.tsx";
import PackItemType from "./PackItem/PackItemType";

function PackingList({ items }) {
  return (
    <div className="main">
      <ul className="item--list">
        {items.map((item: PackItemType) => (
          <PackItem itemName={item.itemName} itemCount={item.itemCount} />
        ))}
      </ul>
    </div>
  );
}

export default PackingList;
