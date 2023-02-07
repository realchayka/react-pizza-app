import React, {useState, useEffect} from "react";

import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import Categories from "../components/Categories";
import Sort from "../components/Sort";

const Home = () => {
  const [items, setItems] = React.useState(['']);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch("https://63c9087e320a0c4c953f1dfd.mockapi.io/items")
      .then((res) => {
        return res.json();
      })
      .then((obj) => {
        setItems(obj);
        setIsLoading(false);
      });
  }, []);
  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items.map((obj) =>
          isLoading ? (
            <Skeleton />
          ) : (
            <PizzaBlock key={obj.id} {...obj}/>
          )
        )}
      </div>
    </>
  );
};

export default Home;