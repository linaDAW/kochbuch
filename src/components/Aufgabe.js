import { useState } from "react";
import { MealCard } from "./MealCard";

export const Aufgabe = () => {
  const [meals, setMeals] = useState([]);
  const [input, setInput] = useState("");
  const [btnClicked, setBtnClicked] = useState(false);

  const fetchData = async (type, query) => {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/${type}.php?${query}=${input}`
    );
    const data = await response.json();
    setMeals(data.meals);
    console.log(data);
    return data;
  };

  const handleSearch = async () => {
    setBtnClicked(true);
    let data = await fetchData("search", "s");
    if (!data.meals) {
      data = await fetchData("filter", "i");
    }
    if (!data.meals) {
      data = await fetchData("filter", "c");
    }
  };


  const handleRandom = () => {
    fetchData("random", "");
  };

  return (
    <div className="p-6">
      <div className="heading"><h1>Search YOUR FOOD RECIPE</h1></div>
      <div className="searchbox">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
      />
      </div>
      <button
        onClick={handleSearch}
        className="bg-blue-500 hover:bg-blue-300 text-white p-2 rounded-md m-2"
      >
        Search
      </button>
      <button
        onClick={handleRandom}
        className="bg-green-500 hover:bg-green-300 text-white p-2 rounded-md m-2"
      >
        Random Meal
      </button>
      {btnClicked && !meals ? (
        <p>No meal found</p>
      ) : (
        <div className="flex flex-wrap justify-between">
          {meals.map((meal) => (
            <MealCard key={meal.idMeal} meal={meal} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Aufgabe;