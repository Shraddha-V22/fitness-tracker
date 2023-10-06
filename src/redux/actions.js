import { BASE_URL } from "../utils/base_url";

export const fetchExercises = () => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_DATA_LOADING" });
    const response = await fetch(`${BASE_URL}/exercises`);
    const data = await response.json();
    dispatch({ type: "FETCH_EXERCISE_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "FETCH_EXERCISE_FAILURE" });
  }
};

export const fetchFood = () => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_DATA_LOADING" });
    const response = await fetch(`${BASE_URL}/food`);
    const data = await response.json();
    dispatch({ type: "FETCH_FOOD_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "FETCH_FOOD_FAILURE" });
  }
};

export const fetchGoals = () => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_DATA_LOADING" });
    const response = await fetch(`${BASE_URL}/goals`);
    const data = await response.json();
    dispatch({ type: "FETCH_GOALS_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "FETCH_GOALS_FAILURE" });
  }
};

export const addExercise = (exercise) => async (dispatch) => {
  try {
    const response = await fetch(`${BASE_URL}/exercises`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(exercise),
    });

    const data = await response.json();
    if (data.exercise) {
      dispatch({ type: "ADD_EXERCISE_SUCCESS", payload: data.exercise });
    }
  } catch (error) {
    dispatch({ type: "ADD_EXERCISE_FAILURE" });
  }
};

export const addFood = (food) => async (dispatch) => {
  try {
    const response = await fetch(`${BASE_URL}/food`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(food),
    });

    const data = await response.json();
    if (data.food) {
      dispatch({ type: "ADD_FOOD_SUCCESS", payload: data.food });
    }
  } catch (error) {
    dispatch({ type: "ADD_FOOD_FAILURE" });
  }
};

export const addGoal = (goal) => async (dispatch) => {
  try {
    const response = await fetch(`${BASE_URL}/goals`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(goal),
    });

    const data = await response.json();
    if (data.goal) {
      dispatch({ type: "ADD_GOAL_SUCCESS", payload: data.goal });
    }
  } catch (error) {
    dispatch({ type: "ADD_GOAL_FAILURE" });
  }
};

export const deleteExercise = (exerciseId) => async (dispatch) => {
  try {
    const response = await fetch(`${BASE_URL}/exercises/${exerciseId}`, {
      method: "DELETE",
    });

    const data = await response.json();
    console.log(data);
  } catch (error) {
    dispatch({ type: "DELETE_EXERCISE_FAILURE" });
  }
};

export const deleteFood = (foodId) => async (dispatch) => {
  console.log(foodId);
  try {
    const response = await fetch(`${BASE_URL}/food/${foodId}`, {
      method: "DELETE",
    });

    const data = await response.json();
    console.log(data);
  } catch (error) {
    dispatch({ type: "DELETE_FOOD_FAILURE" });
  }
};

export const deleteGoal = (goalId) => async (dispatch) => {
  console.log(goalId);
  try {
    const response = await fetch(`${BASE_URL}/goals/${goalId}`, {
      method: "DELETE",
    });

    const data = await response.json();
    console.log(data);
  } catch (error) {
    dispatch({ type: "DELETE_GOAL_FAILURE" });
  }
};
