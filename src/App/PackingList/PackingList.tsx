import "./PackingList.css";
import PackItem from "./PackItem/PackItem.tsx";
import PackItemType from "./PackItem/PackItemType";

type PackingListProps = {
  items: Array<PackItemType>;
};

function PackingList({ items, setItems }) {
  return (
    <div className="main">
      <ul className="item--list">
        {items.map((item: PackItemType) => (
          <PackItem item={item} setItems={setItems} />
        ))}
      </ul>
    </div>
  );
}

export default PackingList;
