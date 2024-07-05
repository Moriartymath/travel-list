import "./SortItems.css";
import PackItemType from "../PackingList/PackItem/PackItemType";
import { useEffect, useRef, useState } from "react";

type SortItemsProps = {
  setSortMethod: Function;
  sortMethods: {
    description: string;
    inputOrder: string;
    packedStatus: string;
  };
};

function SortItems({ sortMethods, setSortMethod }: SortItemsProps) {
  const [sortOption, setSortOption] = useState(sortMethods.inputOrder);
  const isFirstRendering = useRef(true);
  useEffect(() => {
    if (!isFirstRendering.current) {
      if (sortOption === sortMethods.inputOrder) setSortMethod(null);
      else if (sortOption === sortMethods.description)
        setSortMethod(
          () => (prevItem: PackItemType, nextItem: PackItemType) =>
            nextItem.itemName.length - prevItem.itemName.length
        );
      else if (sortOption === sortMethods.packedStatus)
        setSortMethod(
          () => (prevItem: PackItemType, nextItem: PackItemType) =>
            Number(prevItem.packed) - Number(nextItem.packed)
        );
    }
    isFirstRendering.current = false;
  }, [sortOption]);

  return (
    <select
      id="sortOptions"
      value={sortOption}
      onChange={(ev) => {
        ev.target.blur();
        setSortOption(ev.target.value);
      }}
    >
      <option value={sortMethods.inputOrder}>Sort by input order</option>
      <option value={sortMethods.description}>Sort by description</option>
      <option value={sortMethods.packedStatus}>Sort by packed status</option>
    </select>
  );
}

export default SortItems;
