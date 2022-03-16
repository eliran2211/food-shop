import classes from "./NavFood.module.css";
import { ReactComponent as BurgerSvg } from "../../../../assets/burger-svg.svg";
import { ReactComponent as SushiSvg } from "../../../../assets/sushi-svg.svg";
import { ReactComponent as PizzaSvg } from "../../../../assets/pizza-svg.svg";
import { ReactComponent as NoodlesSvg } from "../../../../assets/noodles-svg.svg";
import { ReactComponent as SteakSvg } from "../../../../assets/steak-svg.svg";
import { ReactComponent as DessertSvg } from "../../../../assets/dessert-svg.svg";
import { ReactComponent as DrinkSvg } from "../../../../assets/drink-svg.svg";

import SvgNavItem from "../NavUI/SvgNavItem";
const foodItems = [
  {
    id: "f1",
    title: "Burgers",
    svgElement: BurgerSvg,
    href: "/burgers",
  },
  {
    id: "f2",
    title: "Sushi",
    svgElement: SushiSvg,
    href: "/sushi",
  },
  {
    id: "f3",
    title: "Pizza",
    svgElement: PizzaSvg,
    href: "/pizza",
  },
  {
    id: "f4",
    title: "Noodles",
    svgElement: NoodlesSvg,
    href: "/noodles",
  },
  {
    id: "f5",
    title: "Steak",
    svgElement: SteakSvg,
    href: "/steaks",
  },
  {
    id: "f6",
    title: "Desserts",
    svgElement: DessertSvg,
    href: "/desserts",
  },
  {
    id: "f7",
    title: "Drinks",
    svgElement: DrinkSvg,
    href: "/drinks",
  },
];
function NavFood() {
  const foods = foodItems.map((food) => (
    <SvgNavItem
      key={food.id}
      itemClasses={classes["food-item"]}
      svgClasses={classes["svg-food-item"]}
      title={food.title}
      Svg={food.svgElement}
      href={food.href}
    >
      {food.svgElement}
    </SvgNavItem>
  ));
  return (
    <div className={classes["nav-food"]}>
      <div className={classes["food-items"]}>{foods}</div>
    </div>
  );
}

export default NavFood;
