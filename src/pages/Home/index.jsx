import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchExercises, fetchFood, fetchGoals } from "../../redux/actions";

export const Dashboard = () => {
  const dispatch = useDispatch();
  const { exercises } = useSelector((state) => state.exercises);
  const { food } = useSelector((state) => state.food);
  const { goals } = useSelector((state) => state.goals);
  const isLoading = useSelector((state) => state.loading);

  useEffect(() => {
    dispatch(fetchExercises());
    dispatch(fetchFood());
    dispatch(fetchGoals());
  }, [dispatch]);

  const totalCaloriesBurned = exercises?.reduce(
    (total, exercise) => total + exercise.caloriesBurned,
    0
  );

  const totalCaloriesConsumed = food?.reduce(
    (total, foodItem) => total + foodItem.calories,
    0
  );

  const totalCaloriesGoal = goals?.reduce(
    (total, goal) => total + goal.targetCalories,
    0
  );

  const remainingCaloriesToGoal =
    totalCaloriesGoal - (totalCaloriesConsumed - totalCaloriesBurned);

  return (
    <div className="dashboard mx-auto flex max-w-[600px] flex-col items-center gap-6 p-8">
      {" "}
      <h1 className="text-4xl font-semibold">Fitness Tracker Dashboard</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="dashboard-main flex flex-wrap gap-6">
          <div className="w-[250px] rounded-md border bg-slate-400 p-4">
            <h2 className="text-xl font-semibold">{totalCaloriesBurned}</h2>
            <p>Calories Burned</p>
          </div>
          <div className="w-[250px] rounded-md border bg-slate-400 p-4">
            <h2 className="text-xl font-semibold">{totalCaloriesConsumed}</h2>
            <p>Calories Consumed</p>
          </div>
          <div className="w-[250px] rounded-md border bg-slate-400 p-4">
            <h2 className="text-xl font-semibold">{totalCaloriesGoal}</h2>
            <p>Calories Goal</p>
          </div>
          <div className="w-[250px] rounded-md border bg-slate-400 p-4">
            <h2 className="text-xl font-semibold">{remainingCaloriesToGoal}</h2>
            <p>Remaining Calories</p>
          </div>
        </div>
      )}
    </div>
  );
};
