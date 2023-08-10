import { CDN_URL } from "../utils/constants";
const ItemList = ({ item }) => {
  console.log(item);
  return (
    <div>
      {item.map((item) => (
        <div
          id={item.card.info.id}
          className="p-4 m-2 border-b-2 text-left flex justify-between"
        >
          <div className="py-2 w-8/12">
            <span className="">{item.card.info.name}</span>
            <span>
              - ₹
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </span>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12  ">
            <img src={CDN_URL + item.card.info.imageId} />
            <div className="absolute">
              <button className="px-2 py-1 mx-12 -my-3 bg-white shadow-sm rounded-md ">
                Add +
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
