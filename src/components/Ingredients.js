import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const Ingredients = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const data = await response.json();
    setData(data.meals[0]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const getIngredients = () => {
    const elements = [];

    for (let key in data) {
      if (key.startsWith("strIngredient") && data[key]) {
        const ingredient = data[key];
        const imageUrl = `https://www.themealdb.com/images/ingredients/${ingredient}.png`;
        elements.push(
          <li key={key} className="flex">
            <img src={imageUrl} alt={ingredient} className="mr-2 w-14" />
            {ingredient}
          </li>
        );
      }
    }

    return elements;
  };

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    
    <div className="border border-gray-300 rounded-lg p-4 m-3 shadow-lg max-w-3xl mx-auto">
      <div>
        <h3 className="font-bold">{data.strMeal}</h3>
      </div>

      <div className="flex">
        <img
          src={data.strMealThumb}
          alt={data.strMeal}
          className="w-[50%] h-auto"
        />

        <div className="ml-[10%]">
          <h4 className="font-semibold mt-2">Ingredients:</h4>
          <ul className="list-disc list-inside">{getIngredients()}</ul>
        </div>
      </div>
      <Link to={`/`}>
      <button className="py-2 px-4 rounded-lg mt-4 w-full">HOME</button>
      </Link>
      <div>
        <h4 className="font-semibold mt-2">Instructions:</h4>
        {data.strInstructions}
      </div>
      
      
    </div>
  );
};

export default Ingredients;
