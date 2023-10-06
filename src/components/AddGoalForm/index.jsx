import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addGoal } from "../../redux/actions";

export default function AddGoalForm({ closeModal }) {
  const dispatch = useDispatch();
  const [goalInput, setGoalInput] = useState({
    name: "",
    description: "",
    targetDate: "",
    targetCalories: 0,
    status: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setGoalInput((prev) => ({
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
          placeholder="Goal name"
          onChange={handleInputChange}
          // value={exerciseInput.name}
          className="rounded-sm border p-2 outline-none"
        />
        <input
          type="text"
          name="description"
          placeholder="Ddescription"
          onChange={handleInputChange}
          // value={exerciseInput.duration}
          className="rounded-sm border p-2 outline-none"
        />
        <input
          type="date"
          name="targetDate"
          placeholder="Target Date"
          onChange={handleInputChange}
          // value={exerciseInput.caloriesBurned}
          className="rounded-sm border p-2 outline-none"
        />
        <input
          type="text"
          name="targetCalories"
          placeholder="Target calories"
          onChange={handleInputChange}
          // value={exerciseInput.caloriesBurned}
          className="rounded-sm border p-2 outline-none"
        />
        <select
          name="status"
          id=""
          placeholder="Status"
          onChange={handleInputChange}
        >
          <option value="in progress">In progress</option>
          <option value="achieved">Achieved</option>
          <option value="abandoned">Abandoned</option>
        </select>
      </div>
      <button
        onClick={() => {
          dispatch(addGoal(goalInput));
          closeModal();
        }}
      >
        add Goal
      </button>
    </div>
  );
}
