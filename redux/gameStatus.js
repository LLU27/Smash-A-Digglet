const START_GAME = "START_GAME";
const END_GAME ="END_GAME"

export const startGame = () => ({
  type: START_GAME,
});

export const endGame = ()=>({
  type:END_GAME
})

const initialState = {
  status:false
};

const gameStatusReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_GAME:
      return {...state,status:true};
    case END_GAME:
      return {...state,status:true};
    default:
      return state;
  }
};
export default gameStatusReducer