const ADD_SCORE = "ADD_SCORE";
const CLEAR_SCORE ='CLEAR_SCORE'

export const addScore = () => ({
  type: ADD_SCORE,
});

export const clearScore = ()=>({
  type: CLEAR_SCORE,
})


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
    case CLEAR_SCORE:
      return {score:0}
    default:
      return state;
  }
};

export default scoreReducer;
