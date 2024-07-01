import "./SortItems.css";
import PackItemType from "../PackingList/PackItem/PackItemType";

type SortItemsProps = {
  setSortMethod: Function;
  sortMethods: {
    description: string;
    inputOrder: string;
    packedStatus: string;
  };
};

function SortItems({ sortMethods, setSortMethod }: SortItemsProps) {
  const handlerSelect = function (ev) {
    const sortMethod: string = ev.target.value.toLowerCase();

    if (sortMethod.includes(sortMethods.description))
      setSortMethod(
        () => (prevItem: PackItemType, nextItem: PackItemType) =>
          nextItem.itemName.length - prevItem.itemName.length
      );
    else if (sortMethod.includes(sortMethods.inputOrder)) setSortMethod(null);
    else if (sortMethod.includes(sortMethods.packedStatus))
      setSortMethod(
        () => (prevItem: PackItemType, nextItem: PackItemType) =>
          Number(prevItem.packed) - Number(nextItem.packed)
      );
  };
  return (
    <select
      id="sortOptions"
      defaultValue={`Sort by input order`}
      onChange={handlerSelect}
    >
      <option value="Sort by packed status">Sort by packed status</option>
      <option value="Sort by description">Sort by description</option>
      <option value="Sort by input order">Sort by input order</option>
    </select>
  );
}

export default SortItems;
