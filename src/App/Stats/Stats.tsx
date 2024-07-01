import "./Stats.css";
import PackItemType from "../PackingList/PackItem/PackItemType";

type StatsProps = {
  items: Array<PackItemType>;
};

function Stats({ items }: StatsProps) {
  const packedPercentage =
    items.length &&
    (items.filter((item) => item.packed).length * 100) / items.length;
  return (
    <p className="stats">
      You have {items.length} on your list, and you already packed{" "}
      {items.filter((item: PackItemType) => item.packed).length} (
      <span>
        {Intl.NumberFormat("en-GB", { maximumFractionDigits: 1 }).format(
          packedPercentage
        )}
        %
      </span>
      )
    </p>
  );
}

export default Stats;
