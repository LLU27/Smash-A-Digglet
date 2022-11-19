const ADD_SCORE = "ADD_SCORE";

export const addScore = () => ({
  type: ADD_SCORE,
});

const initialState = {
  score: 0,
};

const scoreReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SCORE:
      return {
        ...state,
        score: state.score + 1,
      };
    default:
      return state;
  }
};

export default scoreReducer;
