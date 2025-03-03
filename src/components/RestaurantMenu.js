import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

import Error from "./Error";
import Contact from "./Contact";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [itemAllCards, setItemAllCards] = useState([]);
  const [itemCardsFiltered, setItemCardsFiltered] = useState([]);
  const { resId } = useParams();

  useEffect(() => {
    fetchResData();
  }, []);

  const fetchResData = async () => {
    const data = await fetch(MENU_URL + resId);

    console.log(data);
    const json = await data.json();
    if (!json?.data?.cards) {
      return <Contact />;
    }
    console.log(json.data);
    setResInfo(json.data);
    setItemAllCards(
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card
        ?.card?.itemCards
    );
    setItemCardsFiltered(
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card
        ?.card?.itemCards
    );
  };

  if (resInfo === null) {
    return <Shimmer />;
  }
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards?.[2].card.card.info;
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
      >
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="toggle"></label>
      </div>
      <div className="menu">
        <h1>{name}</h1>
        <p>
          {cuisines.join(", ")} - {costForTwoMessage}
        </p>
        <h2>Menu</h2>
        <ul>
          {itemCardsFiltered.map((item) => (
            <li key={item.card.info + item.card.info.name}>
              {item.card.info.name} -{" "}
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
