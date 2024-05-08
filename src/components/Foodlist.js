import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MealCard } from "./MealCard";

const Foodlist = () => {
  const { category } = useParams();

  const [data, setData] = useState(null);

  const fetchData = async () => {
    let response;

    if (category) {
      response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${category}`
      ); 
    } else {
      response = await fetch (
        `https://www.themealdb.com/api/json/v1/1/search.php?s=`
      )
    }

    const data = await response.json();
    setData(data.meals);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-wrap justify-between">
      {data && data.map((meal) => (
        <MealCard key={meal.idMeal} meal={meal} />
      ))}
    </div>
  );
};

export default Foodlist;
