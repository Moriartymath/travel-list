import "./PackingList.css";
import PackItem from "./PackItem/PackItem.tsx";
import PackItemType from "./PackItem/PackItemType";

type PackingListProps = {
  items: Array<PackItemType>;
  setItems: Function;
  sortMethod: Function;
};

function PackingList({ items, setItems, sortMethod }) {
  const copy = items.slice();
  const sortedItems = sortMethod ? copy.sort(sortMethod) : copy;

  return (
    <div className="main">
      <ul className="item--list">
        {sortedItems.map((item: PackItemType, index: number) => (
          <PackItem item={item} setItems={setItems} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

export default PackingList;
