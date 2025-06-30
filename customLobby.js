var socket;
var isConnected = false;
var hostToken = null;
var host = false;
var lobby = null;
var playerId = null; // Not used currently
var spectator = false;
var game = {
  id: null,
  timeLeft: null,
  joined: false,
};

function connectToServer(code, name) {
  socket = io("https://territorial-custom-lobbies-backend.onrender.com");

  isConnected = false;
  hostToken = null;
  host = false;
  lobby = null;
  playerId = null;
  spectator = false;
  game = {
    id: null,
    timeLeft: null,
    joined: false,
  };

  socket.on("connect", () => {
    isConnected = true;
    socket.emit("joinLobby", code, name);
  });

  socket.on("lobbyJoined", (lobbyData, playerIdData) => {
    if (lobbyData.hostToken !== undefined) {
      hostToken = lobbyData.hostToken;
      host = true;
    }
    lobby = lobbyData;
    playerId = playerIdData;
    createCustomLobbyUI();
  });

  socket.on("playersChanged", (players) => {
    lobby.players = players;
    createPlayerList();
  });

  socket.on("settingsUpdated", (settings) => {
    lobby.settings = settings;
    updateSettingsUI();
  });

  socket.on("gameStarted", (gameId) => {
    if (lobby.players)
      if (!host) {
        joinTerriLobby();
      }
    game.id = gameId;
    setTimeout(() => {
      joinGame();
    }, 1000);
  });

  socket.on("newHostToken", (lobbyData) => {
    lobby = lobbyData;
    hostToken = lobbyData.hostToken;
    host = true;
    updateSettingsUI((newHost = true));
    updateBottomButtons();
  });

  socket.on("lobbyClosed", (resp) => {
    displayLobbyClosedMessage(resp.message);
  });

  socket.on("kicked", (resp) => {
    console.log(resp.message);
    backToMainMenu();
  });

  socket.on("disconnect", () => {
    isConnected = false;
    hostToken = null;
    host = false;
    lobby = null;
    playerId = null;
    spectator = false;
    game = {
      id: null,
      timeLeft: null,
      joined: false,
    };
  });

  socket.on("error", (err) => {
    console.log(err.message);
  });
}

function changePlayerName(newName) {
  const code = lobby.code;
  socket.emit("changePlayerName", code, newName);
}

function changePlayerspectatorStatus() {
  const code = lobby.code;
  socket.emit("changePlayerSpectatorStatus", code, spectator);
}

function updateSettings(newSettings) {
  const code = lobby.code;
  socket.emit("updateSettings", code, hostToken, newSettings);
}

function kickPlayer(playerIdToKick) {
  const code = lobby.code;
  socket.emit("kickPlayer", code, hostToken, playerIdToKick);
}

function joinTerriLobby() {
  // const proxy = lobby.players.length === 1 ? 0 : 2;
  // aM.a7U(proxy); // set lobby id to 2
  // aM.dH() // Enter the lobby
  aZ.dX();
  updateUsernameInput(); // Disable username change during the count down to the game
}

// function chooseGame(lobbyGames) {
//   const code = lobby.code;
//   var gameId = 0;
//   var timeLeft = 0;
//   for (let i = 0; i < lobbyGames.length; i++) {
//     if (lobbyGames[i].timeLeft <= 3 || lobbyGames[i].gameMode == 8) {
//       continue;
//     }
//     gameId = lobbyGames[i].id;
//     timeLeft = lobbyGames[i].timeLeft;
//     game.id = gameId;
//     game.timeLeft = timeLeft;
//     break;
//   }
//   socket.emit('startGame', code, hostToken, gameId);
// }

function chooseGame() {
  const code = lobby.code;
  var gameId = 0;
  if (game.timeLeft > 3) {
    socket.emit("startGame", code, hostToken, gameId);
  } else {
    const timeOut = (game.timeLeft + 1) * 1000;
    setTimeout(() => {
      socket.emit("startGame", code, hostToken, gameId);
    }, timeOut);
  }
}

// function joinGame() {
//   const code = lobby.code;
//   aq.a7Z.a8u(game.id);
//   game.joined = true;

//   let timeOut = (game.timeLeft + 1) * 1000;
//   setTimeout(() => {
//     socket.emit('updateGameStatus', code, true);
//   }, timeOut);
// }

function joinGame() {
  const code = lobby.code;
  az.aD1.aD2(4);
  game.joined = true;

  let timeOut = (game.timeLeft + 1) * 1000;
  setTimeout(() => {
    socket.emit("updateGameStatus", code, true);
  }, timeOut);
}

function backToLobby() {
  const code = lobby.code;
  game = {
    id: null,
    timeLeft: null,
    joined: false,
  };
  socket.emit("updateGameStatus", code, false);
}

function leaveLobby() {
  if (socket === undefined) {
    return;
  }
  socket.disconnect();

  isConnected = false;
  hostToken = null;
  host = false;
  lobby = null;
  playerId = null;
  spectator = false;
  game = {
    id: null,
    timeLeft: null,
    joined: false,
  };
}

window.addEventListener("beforeunload", () => {
  if (socket) {
    socket.disconnect();
  }
});

function sendChatMessage(message) {
  const code = lobby.code;
  socket.emit("chatMessage", code, message);
}
