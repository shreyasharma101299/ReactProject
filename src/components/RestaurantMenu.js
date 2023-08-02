import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { PATH } from "../utils/constants";

const RestaurantMenu = () => {
  const [resData, setResData] = useState([]);
  const { resId } = useParams();
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(PATH + resId);
    console.log(PATH, resId);
    const json = await data.json();
    setResData(json?.data);
  };
  if (resData?.length === 0) return <Shimmer />;
  const { name, cuisines, costForTwo } = resData?.cards?.[0]?.card?.card?.info;
  const { itemCards } =
    resData?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[6]?.card
      ?.card;
  console.log(resData?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR);
  return (
    <div>
      <h1>Restaurant Menu</h1>
      <h2>{name}</h2>
      <h3>{cuisines + "- Rs" + costForTwo / 100}</h3>
      <ul>
        {itemCards?.map((res) => (
          <li key={res.card.info.id}>{res.card.info.name}</li>
        ))}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
