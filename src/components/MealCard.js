import React, { useState } from "react";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

export const MealCard = ({ meal }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  
  const getIngredients = () => {
    const elements = [];
    for (let key in meal) {
      if (key.startsWith("strIngredient") && meal[key]) {
        const ingredient = meal[key];
        const imageUrl = `https://www.themealdb.com/images/ingredients/${ingredient}.png`;
        elements.push(
          <li key={key} className="flex">
            <img src={imageUrl} alt={ingredient} className="mr-2 w-14" />
            {ingredient}
          </li>
        );
      }
    }
    console.log(elements);
    return elements;
    
  };
 
  const popover = (
    <Popover id="popover-basic" className="bg-white text-gray-700">
      <Popover.Header as="h3" className="font-bold">
        {meal.strMeal}
        <button
          className="float-right"
          onClick={handleClose}
          aria-label="Close"
        >
          <span aria-hidden="true">X</span>
        </button>
      </Popover.Header>
      <Popover.Body>
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="w-full h-auto"
        />

        <h4 className="font-semibold mt-2">Ingredients:</h4>
        <ul className="list-disc list-inside">{getIngredients()}</ul>

        <h4 className="font-semibold mt-2">Instructions:</h4>
        {meal.strInstructions}
      </Popover.Body>
    </Popover>
  );

  return (
    <div className="border border-gray-300 rounded-md m-2 p-2 w-56">
      <OverlayTrigger
        trigger="click"
        placement="right"
        overlay={popover}
        show={show}
        onToggle={handleClose}
      >
        <img
          className="w-full h-auto rounded-md cursor-pointer"
          src={meal.strMealThumb}
          alt={meal.strMeal}
          onClick={handleShow}
        />
      </OverlayTrigger>
      <h2 className="text-center text-2xl">{meal.strMeal}</h2>
    </div>
  );
};
