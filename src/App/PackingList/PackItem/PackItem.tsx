import "./PackItem.css";

type PackItemProps = {
  itemName: string;
  itemCount: number;
};

function PackItem({ itemName, itemCount }: PackItemProps) {
  return (
    <li className="item">
      <input type="checkbox" id="checkbox" />
      <p>
        <span>{itemCount}</span>
        {itemName}
      </p>
    </li>
  );
}

export default PackItem;
