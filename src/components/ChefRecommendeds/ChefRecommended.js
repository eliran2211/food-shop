import PizzaBianca from "../../assets/food-slider/pizza-bianca.jpg";
import PizzaCarne from "../../assets/food-slider/pizza-carne.jpg";
import classes from "./ChefRecommended.module.css";
import PizzaMilano from "../../assets/food-slider/pizza-milano.jpg";
import PizzaRegina from "../../assets/food-slider/pizza-regina.jpg";
import PizzaVesuvio from "../../assets/food-slider/pizza-vesuvio.jpg";

import chefImg from "../../assets/chef/chef-louise.jpg";
import louiseFood from "../../assets/chef/louise-food.jpg";
import FoodSlider from "../FoodSlider/FoodSlider";

const foodItems = [
  {
    id: "fsPBia",
    title: "Pizza Bianca",
    imageSrc: PizzaBianca,
    ingredients: [
      "Garlic Flatbread with Mozzarella",
      "Parmesan",
      "Garlic",
      "Rosemary",
    ],
    price: 13.99,
  },
  {
    id: "fsPCar",
    title: "Pizza Carne",
    imageSrc: PizzaCarne,
    ingredients: [
      "Tomato Sauce",
      "Mozzarella Chicken",
      "Beef",
      "Papperoni",
      "Onions",
      "Rosemary",
    ],
    price: 19.99,
  },
  {
    id: "fsPMil",
    title: "Pizza Milano",
    imageSrc: PizzaMilano,
    ingredients: [
      "Tomato Sauce",
      "Mozzarella",
      "Mascarpone",
      "Sausage",
      "Rocket",
    ],
    price: 15.99,
  },
  {
    id: "fsPReg",
    title: "Pizza Regina",
    imageSrc: PizzaRegina,
    ingredients: [
      "Tomato Sauce",
      "Mozzarella",
      "Parmesan",
      "Ham",
      "Mushrooms",
      "Black Olives",
    ],
    price: 18.99,
  },
  {
    id: "fsPVes",
    title: "Pizza Vesuvio",
    imageSrc: PizzaVesuvio,
    ingredients: [
      "Tomato Sauce",
      "Mozzarella",
      "Papperoni",
      "Green Chillies",
      "Cracked Chilies",
    ],
    price: 15.99,
  },
];

function ChefRecommended() {
  return (
    <div className={classes["recommended-section"]}>
      <div className={classes["image-container"]}>
        <img className={classes["louise-img"]} src={chefImg} alt="louise" />
        <img
          className={classes["louise-food"]}
          src={louiseFood}
          alt="louise food"
        />
        <h1>Chef Louise Mckay</h1>
      </div>
      <FoodSlider
        width="40rem"
        itemsInPage={2}
        actionPosition="top"
        foodItems={foodItems}
      />
    </div>
  );
}

export default ChefRecommended;
