export const setLobbyPlayers = (players) => ({
    type: "SET_LOBBY_PLAYERS",
    payload: players,
  });

export const setLobbyPlace = (place) => ({
  type: "SET_LOBBY_PLACE",
  payload: place,
});

export const editLobbyPlayers = (players) => ({
  type: "EDIT_LOBBY_PLAYERS",
  payload: players,
});

export const setLobbyPlayersCount = (count) => ({
  type: "SET_PLAYERS_COUNT",
  payload: count,
});