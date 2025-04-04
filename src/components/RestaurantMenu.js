import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";
import Error from "./Error";
import Contact from "./Contact";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [itemAllCards, setItemAllCards] = useState([]);
  const [itemCardsFiltered, setItemCardsFiltered] = useState([]);
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(0);

  useEffect(() => {
    fetchResData();
  }, []);

  const fetchResData = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();
    if (!json?.data?.cards) {
      return <Contact />;
    }
    setResInfo(json?.data);
    setItemAllCards(
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card
        ?.card?.itemCards
    );
    setItemCardsFiltered(
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card
        ?.card?.itemCards
    );
    // console.log(
    //   json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    // );
  };

  if (resInfo === null) {
    return <Shimmer />;
  }
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards?.[2].card.card.info;
  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => {
      return (
        c.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    });
  return (
    <div>
      <div
        className="toggleContainer"
        onClick={(e) => {
          if (e.target.checked) {
            const vegOnlyItems = itemAllCards.filter((item) => {
              return item.card.info.isVeg == 1;
            });
            setItemCardsFiltered(vegOnlyItems);
          } else {
            setItemCardsFiltered(itemAllCards);
          }
        }}
      ></div>
      <div className="text-center ">
        <h1 className="font-bold my-6 text-2xl">{name}</h1>
        <p className="font-bold text-lg">
          {cuisines.join(", ")} - {costForTwoMessage}
        </p>
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="toggle">
          Veg
        </label>
        <h2>Menu</h2>
        {/* categories accordion */}
        {categories.map((category, index) => {
          return (
            //controlled component
            <RestaurantCategory
              key={category?.card?.card?.title}
              data={category?.card?.card}
              showItems={index == showIndex && true}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
