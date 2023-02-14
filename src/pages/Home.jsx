import React, {useState, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";

import { setCategoryId } from '../redux/slices/filterSlice'
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Pagination from "../components/Pagination";
import { SearchContext } from "../App";

const Home = () => {
  const dispatch = useDispatch()
  const categoryId = useSelector(state => state.filter.categoryId);
  const sortType = useSelector(state => state.filter.sort.sortProperty)


  const {searchValue, setSearchValue} = React.useContext(SearchContext)
  const [items, setItems] = React.useState(['']);
  const [isLoading, setIsLoading] = React.useState(true);
  const [currentPage, setCurrentPage] = React.useState(1);
 


  const onClickCategory = (id) => {
    dispatch(setCategoryId(id))
  }



  React.useEffect(() => {
    setIsLoading(true)

    const order = sortType.includes('-') ? 'asc' : 'desc';
    const sortBy = sortType.replace('-','')
    const category = categoryId > 0 ? `category=${categoryId}` : ''
    const search = searchValue ? `&search=${searchValue}` : ``
    
    fetch(`https://63c9087e320a0c4c953f1dfd.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`)
      .then((res) => {
        return res.json();
      })
      .then((obj) => {
        setItems(obj);
        setIsLoading(false);
      });
  }, [categoryId, sortType, searchValue, currentPage]);

    const filterPizza = `filter(obj => {
      if (obj.title.toLowerCase().includes(searchValue.toLowerCase())){
        return true;
      }
      return false;
    })`
    
    const pizzas = items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)
    const skeletons =  [...new Array(6)].map((_,index) => <Skeleton key={index} />)

  return (
    <>
      <div className="content__top">
        <Categories value={categoryId} onClickCategory={onClickCategory}/>
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading ? skeletons : pizzas}
      </div>
     <Pagination onChangePage={number => setCurrentPage(number)}/>
    </>
  );
};

export default Home;