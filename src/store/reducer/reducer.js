import actions from "../types";

export const initialState = {
  user: null,
  playlist: [],
  isPlaying: false,
  currentSong: null,
  //token: null,
  token:
    "BQBExt9xoyUSSEjzy6EnqSewonjj0JSPZ6eYIeHOOi9pvzEV8M…JLN8MxG04kOSTvDkPO224Qr8gsx0_hmyeqGnf3XLlSEkN673-",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.SET_USER:
      return {
        ...state,
        user: action.user,
      };

    case actions.SET_TOKEN:
      return {
        ...state,
        token: action.token,
      };

    default:
      return state;
  }
};

export default reducer;
