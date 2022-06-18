const initialState = {
  history: [],
  players: [],
  place: null,
  count: 0,
};

const players = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LOBBY_PLAYERS":
      return {
        ...state,
        history: action.payload,
        players: action.payload,
        count: action.payload.length
      };

    case "EDIT_LOBBY_PLAYERS":
      return {
        ...state,
        players: action.payload,
        count: action.payload.length
      };

    case "SET_PLAYERS_COUNT":
      return {
        ...state,
        count: Number(action.payload)
      };

    case "SET_LOBBY_PLACE":
      return {
        ...state,
        place: action.payload
      };

      default:
      return state;
  }
};

export default players;
