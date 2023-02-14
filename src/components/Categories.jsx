import React from "react";

function Categories({value, onClickCategory}) {
  const [activeIndex, setActiveIndex] = React.useState(0);
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
      <ul>{categories.map((categoryName, i) => <li className={value == i ? 'active' : ''} onClick={() => onClickCategory(i)}>{categoryName}</li> )}</ul>
    </div>
  );
}

export default Categories;
