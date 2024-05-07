import { Link } from "react-router-dom";

export const MealCard = ({ meal }) => {
  return (
    <div className="border border-gray-300 rounded-md m-2 p-2 w-56">
      <Link to={`/ingredients/${meal.idMeal}`}>
        <img
          className="w-full h-auto rounded-md cursor-pointer"
          src={meal.strMealThumb}
          alt={meal.strMeal}
        />
      </Link>
      <h2 className="text-center text-2xl">{meal.strMeal}</h2>
    </div>
  );
};
