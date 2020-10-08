import actions from "../types";

export const initialState = {
  user: null,
  playlist: [],
  discover_weekly: null,
  isPlaying: false,
  item: null,
  token: null,
  top_artists: [],
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

    case actions.SET_PLAYLIST:
      return {
        ...state,
        playlist: action.playlist,
      };

    case actions.SET_DISOVER_WEEKLY:
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    case actions.SET_ITEM:
      return {
        ...state,
        item: action.item,
      };

    case actions.SET_PLAYING:
      return {
        ...state,
        playing: action.playing,
      };

    case actions.SET_TOP_ARTISTS:
      return {
        ...state,
        top_artists: action.top_artists,
      };

    default:
      return state;
  }
};

export default reducer;
