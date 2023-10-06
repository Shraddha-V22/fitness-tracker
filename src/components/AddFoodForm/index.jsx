import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addFood } from "../../redux/actions";

export default function AddFoodForm({ closeModal }) {
  const dispatch = useDispatch();
  const [foodInput, setFoodInput] = useState({
    name: "",
    calories: 0,
    proteinInGms: 0,
    carbsInGms: 0,
    fatInGms: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFoodInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Food name"
          onChange={handleInputChange}
          // value={exerciseInput.name}
          className="rounded-sm border p-2 outline-none"
        />
        <input
          type="text"
          name="calories"
          placeholder="Calories"
          onChange={handleInputChange}
          // value={exerciseInput.duration}
          className="rounded-sm border p-2 outline-none"
        />
        <input
          type="text"
          name="proteinInGms"
          placeholder="Protein in grams"
          onChange={handleInputChange}
          // value={exerciseInput.caloriesBurned}
          className="rounded-sm border p-2 outline-none"
        />
        <input
          type="text"
          name="carbsInGms"
          placeholder="Carbohydrates in grams"
          onChange={handleInputChange}
          // value={exerciseInput.caloriesBurned}
          className="rounded-sm border p-2 outline-none"
        />
        <input
          type="text"
          name="fatInGms"
          placeholder="Fat in grams"
          onChange={handleInputChange}
          // value={exerciseInput.caloriesBurned}
          className="rounded-sm border p-2 outline-none"
        />
      </div>
      <button
        onClick={() => {
          dispatch(addFood(foodInput));
          closeModal();
        }}
      >
        add Food
      </button>
    </div>
  );
}
