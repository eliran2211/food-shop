import FoodMenu from "../components/FoodMenu/FoodMenu";

import biancaImg from "../assets/pizza-menu/pizza-bianca.jpg";
import calebriaImg from "../assets/pizza-menu/pizza-calebria.jpg";
import carneImg from "../assets/pizza-menu/pizza-carne.jpg";
import formaggiImg from "../assets/pizza-menu/pizza-formaggi.jpg";
import funghiImg from "../assets/pizza-menu/pizza-funghi.jpg";
import margheritaImg from "../assets/pizza-menu/pizza-margherita.jpg";
import milanoImg from "../assets/pizza-menu/pizza-milano.jpg";
import reginaImg from "../assets/pizza-menu/pizza-regina.jpg";
import vesuvioImg from "../assets/pizza-menu/pizza-vesuvio.jpg";

const foodItems = [
  {
    id: "Bianca Pizza",
    title: "Bianca Pizza",
    imageSrc: biancaImg,
    description: "A hamburger made using beef from Angus cattle.",
    price: 13.99,
  },
  {
    id: "calebria_pizza_menu",
    title: "Calebria Pizza",
    imageSrc: calebriaImg,
    description: "Popular regional hamburger ingredients in Australia.",
    price: 13.99,
  },
  {
    id: "carne_pizza_menu",
    title: "Carne Pizza",
    imageSrc: carneImg,
    description: "Hamburger with bacon and cheese.",
    price: 13.99,
  },
  {
    id: "formaggi_pizza_menu",
    title: "Formaggi Pizza",
    imageSrc: formaggiImg,
    description:
      "A hamburger served with chicken, chili, lettuce, tomato, and onion.",
    price: 13.99,
  },
  {
    id: "funghi_pizza_menu",
    title: "Funghi Pizza",
    imageSrc: funghiImg,
    description:
      "A hamburger served with chicken, chili, lettuce, tomato, and onion.",
    price: 16.99,
  },
  {
    id: "margherita_pizza_menu",
    title: "Margherita Pizza",
    imageSrc: margheritaImg,
    description:
      "A hamburger served with chicken, chili, lettuce, tomato, and onion.",
    price: 12.99,
  },
  {
    id: "milano_pizza_menu",
    title: "Milano Pizza",
    imageSrc: milanoImg,
    description:
      "A hamburger served with chicken, chili, lettuce, tomato, and onion.",
    price: 15.99,
  },
  {
    id: "regina_pizza_menu",
    title: "Regina Pizza",
    imageSrc: reginaImg,
    description:
      "A hamburger served with chicken, chili, lettuce, tomato, and onion.",
    price: 14.99,
  },
  {
    id: "vesuvio_pizza_menu",
    title: "Vesuvio Pizza",
    imageSrc: vesuvioImg,
    description:
      "A hamburger served with chicken, chili, lettuce, tomato, and onion.",
    price: 16.99,
  },
];

function PizzaPage() {
  return <FoodMenu title="Pizza" foodItems={foodItems} />;
}

export default PizzaPage;
