import FoodMenu from "../components/FoodMenu/FoodMenu";

import angusImg from "../assets/burger-menu/angus.jpg";
import aussieImg from "../assets/burger-menu/aussie.jpg";
import baconImg from "../assets/burger-menu/bacon-cheeseburger.jpg";
import buffaloImg from "../assets/burger-menu/buffalo.jpg";
import californiaImg from "../assets/burger-menu/california.jpg";
import chiliImg from "../assets/burger-menu/chili.jpg";

const foodItems = [
  {
    id: "angus burger menu",
    title: "Angus Burger",
    imageSrc: angusImg,
    description: "A hamburger made using beef from Angus cattle.",
    price: 18.99,
  },
  {
    id: "aussie burger menu",
    title: "Aussie Burger",
    imageSrc: aussieImg,
    description: "Popular regional hamburger ingredients in Australia.",
    price: 14.99,
  },
  {
    id: "bacon burger menu",
    title: "Bacon Burger",
    imageSrc: baconImg,
    description: "Hamburger with bacon and cheese.",
    price: 22.99,
  },
  {
    id: "buffalo burger menu",
    title: "Buffalo Burger",
    imageSrc: buffaloImg,
    description: "Buffalo burgers have less cholesterol and less fat.",
    price: 22.99,
  },
  {
    id: "california burger menu",
    title: "California Burger",
    imageSrc: californiaImg,
    description: "A hamburger served with chicken, lettuce, tomato, and onion.",
    price: 18.99,
  },
  {
    id: "chili burger menu",
    title: "Chili Burger",
    imageSrc: chiliImg,
    description:
      "A hamburger served with chicken, chili, lettuce, tomato, and onion.",
    price: 14.99,
  },
];

function BurgerPage() {
  return <FoodMenu title="Burgers" foodItems={foodItems} />;
}

export default BurgerPage;
