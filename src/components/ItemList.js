const ItemList = ({ items }) => {
  console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-10/12">
            <div className="py-2">
              <span>{item?.card?.info?.name}</span>
              <span>
                - ₹
                {item?.card?.info?.price / 100
                  ? item?.card?.info?.price / 100
                  : item?.card?.info?.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item?.card.info.description}</p>
          </div>
          <div className="w-2/12 p-4">
            <div className="absolute">
              <button className="p-1 m-auto rounded-lg bg-black text-white">
                Add +
              </button>
            </div>
            <img
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                item?.card?.info?.imageId
              }
              className="h-20 w-full"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
