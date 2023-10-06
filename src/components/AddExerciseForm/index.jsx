import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addExercise } from "../../redux/actions";

export default function AddExerciseForm({ closeModal }) {
  const dispatch = useDispatch();
  const [exerciseInput, setExerciseInput] = useState({
    name: "",
    duration: 0,
    caloriesBurned: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setExerciseInput((prev) => ({
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
          placeholder="Exercise name"
          onChange={handleInputChange}
          // value={exerciseInput.name}
          className="rounded-sm border p-2 outline-none"
        />
        <input
          type="text"
          name="duration"
          placeholder="Duration"
          onChange={handleInputChange}
          // value={exerciseInput.duration}
          className="rounded-sm border p-2 outline-none"
        />
        <input
          type="text"
          name="caloriesBurned"
          placeholder="Calories burned"
          onChange={handleInputChange}
          // value={exerciseInput.caloriesBurned}
          className="rounded-sm border p-2 outline-none"
        />
      </div>
      <button
        onClick={() => {
          dispatch(addExercise(exerciseInput));
          closeModal();
        }}
      >
        add exercise
      </button>
    </div>
  );
}
