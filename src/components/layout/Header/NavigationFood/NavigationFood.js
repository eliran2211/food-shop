import React from "react";
import classes from "./NavigationFood.module.css";
import NavItem from "../NavigationBar/NavItem";
import { ReactComponent as BurgerSvg } from "../../../../assets/navigation/navigation-food/burger-svg.svg";
import { ReactComponent as DessertSvg } from "../../../../assets/navigation/navigation-food/dessert-svg.svg";
import { ReactComponent as DrinkSvg } from "../../../../assets/navigation/navigation-food/drink-svg.svg";
import { ReactComponent as PizzaSvg } from "../../../../assets/navigation/navigation-food/pizza-svg.svg";
import { ReactComponent as SteakSvg } from "../../../../assets/navigation/navigation-food/steak-svg.svg";
import { ReactComponent as SushiSvg } from "../../../../assets/navigation/navigation-food/sushi-svg.svg";
import { ReactComponent as NoodlesSvg } from "../../../../assets/navigation/navigation-food/noodles-svg.svg";

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

const NavigationFood = () => {
  const items = foodItems.map((foodItem) => {
    const Svg = foodItem.svgElement;
    return (
      <NavItem key={foodItem.id}>
        <div className={classes["food-item"]}>
          <Svg className={classes["food-svg"]} />
          <p>{foodItem.title}</p>
        </div>
      </NavItem>
    );
  });
  return (
    <div className={classes["nav-food"]}>
      <div className={classes["food-items"]}>{items}</div>
    </div>
  );
};

export default NavigationFood;
