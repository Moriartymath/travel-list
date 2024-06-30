import "./PackItem.css";
import PackItemType from "./PackItemType";

type PackItemProps = {
  item: {
    itemName: string;
    itemCount: number;
  };
  setItems: Function;
};

function PackItem({ item, setItems }: PackItemProps) {
  return (
    <li className="item">
      <input type="checkbox" id="checkbox" className="checkbox" />
      <span>{item.itemCount}</span>
      <p>{item.itemName}</p>
      <button
        className="delete"
        onClick={() =>
          setItems((currItems: Array<PackItemType>) =>
            currItems.filter((currItem) => currItem !== item)
          )
        }
      >
        &#x2715;
      </button>
    </li>
  );
}

export default PackItem;
