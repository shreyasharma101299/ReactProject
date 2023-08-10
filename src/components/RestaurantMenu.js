import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(null);
  const [show, setShow] = useState(false);
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  //console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (car) =>
        car?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  return (
    <div className="menu text-center">
      <h1 className="font-bold text-2xl my-4">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>

      {categories.map((category, index) => (
        <RestaurantCategory
          key={category.card.card.title}
          data={category?.card?.card}
          showIndex={showIndex === index && show ? true : false}
          showItem={() => {
            setShowIndex(index);
            setShow(!show);
          }}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
