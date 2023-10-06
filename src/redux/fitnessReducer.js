const initialState = {
  exercises: [],
  food: [],
  goals: [],
  loading: false,
  error: null,
};

const fitnessReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "FETCH_EXERCISE_SUCCESS":
      return {
        ...state,
        exercises: payload,
        loading: false,
        error: null,
      };
    case "FETCH_EXERCISE_FAILURE":
      return {
        ...state,
        loading: false,
        error: "Error fetching exercises data",
      };
    case "ADD_EXERCISE_SUCCESS":
      return {
        ...state,
        exercises: [...exercises, payload],
      };
    case "ADD_EXERCISE_FAILURE":
      return {
        ...state,
        error: "Error adding new exercise",
      };
    case "DELETE_EXERCISE_FAILURE":
      return {
        ...state,
        error: "Error deleting exercise",
      };
    case "FETCH_FOOD_SUCCESS":
      return {
        ...state,
        food: payload,
        loading: false,
        error: null,
      };
    case "FETCH_FOOD_FAILURE":
      return {
        ...state,
        loading: false,
        error: "Error fetching food data",
      };
    case "ADD_FOOD_SUCCESS":
      return {
        ...state,
        food: [...food, payload],
      };
    case "ADD_FOOD_FAILURE":
      return {
        ...state,
        error: "Error adding new food",
      };
    case "DELETE_FOOD_FAILURE":
      return {
        ...state,
        error: "Error deleting food",
      };
    case "FETCH_GOALS_SUCCESS":
      return {
        ...state,
        goals: payload,
        loading: false,
        error: null,
      };
    case "FETCH_GOALS_FAILURE":
      return {
        ...state,
        loading: false,
        error: "Error fetching food data",
      };
    case "ADD_GOALS_SUCCESS":
      return {
        ...state,
        goals: [...goals, payload],
      };
    case "ADD_GOALS_FAILURE":
      return {
        ...state,
        error: "Error adding new goal",
      };
    case "DELETE_GOAL_FAILURE":
      return {
        ...state,
        error: "Error deleting goal",
      };
    case "FETCH_DATA_LOADING":
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default fitnessReducer;
