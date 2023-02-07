import React from "react";

function Categories() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const onClickCategory = (index) => {
    setActiveIndex(index);
  };

  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];
  return (
    <div className="categories">
      <ul>{categories.map((value, index) => <li className={activeIndex == index ? 'active' : ''} onClick={() => (onClickCategory(index))}>{value}</li> )}</ul>
    </div>
  );
}

export default Categories;
