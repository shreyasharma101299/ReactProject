import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showIndex, showItem }) => {
  const [showItems, setShowItems] = useState(showIndex);
  const handleClick = () => {
    showItem();
  };
  return (
    <div className="mx-auto my-4 w-7/12 bg-gray-50 shadow-lg p-6 ">
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold">
          {data.title} ({data.itemCards.length})
        </span>
        <span>🔽</span>
      </div>
      {showIndex && <ItemList items={data.itemCards} />}
    </div>
  );
};
export default RestaurantCategory;
