import React, {useState, useEffect} from "react";

import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import Categories from "../components/Categories";
import Sort from "../components/Sort";

const Home = () => {
  const [items, setItems] = React.useState(['']);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoryId, setCategoryId] = React.useState(0);
  const [sortType, setSortType] = React.useState({
    name:'популярности',
    sort:'rating'
  });

  React.useEffect(() => {
    setIsLoading(true)

    const order = sortType.sort.includes('-') ? 'asc' : 'desc';
    const sortBy = sortType.sort.replace('-','')
    const category = categoryId > 0 ? `category=${categoryId}` : ''
    
    fetch(`https://63c9087e320a0c4c953f1dfd.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`)
      .then((res) => {
        return res.json();
      })
      .then((obj) => {
        setItems(obj);
        setIsLoading(false);
      });
  }, [categoryId, sortType]);
  return (
    <>
      <div className="content__top">
        <Categories value={categoryId} onClickCategory={(id) => setCategoryId(id)}/>
        <Sort value={sortType} onClickSort={(id) => setSortType(id)}/>
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