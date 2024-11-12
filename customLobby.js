var socket;
var isConnected = false
var hostToken = null;
var host = false;
var lobby = null;
var playerId = null; // Not used currently
var spectator = false;
var game = {
  id: null,
  timeLeft: null,
  joined: false,
}

function connectToServer(code, name, create = false) {
  socket = io("https://territorial-custom-lobbies-backend.onrender.com");

  isConnected = false;
  hostToken = null;
  host = false;
  lobby = null
  playerId = null;
  spectator = false;
  game = {
    id: null,
    timeLeft: null,
    joined: false,
  }

  socket.on('connect', () => {
    isConnected = true;
    if (create) {
      socket.emit('createLobby', code, name);
    } else {
      socket.emit('joinLobby', code, name);
    }
  });

  socket.on('lobbyJoined', (lobbyData, playerIdData) => {
    if (lobbyData.hostToken !== undefined) {
      hostToken = lobbyData.hostToken;
      host = true;
    }
    lobby = lobbyData;
    playerId = playerIdData;
    createCustomLobbyUI();
  });

  socket.on('playersChanged', (players) => {
    lobby.players = players;
    createPlayerList();
  });

  socket.on('settingsUpdated', (settings) => {
    lobby.settings = settings;
    updateSettingsUI();
  });

  socket.on('gameStarted', (gameId) => {
    if (lobby.players)
    if (!host) {
      joinTerriLobby();
    }
    game.id = gameId;
  });

  socket.on('kicked', (resp) => {
    console.log(resp);
    backToMainMenu();
  });

  socket.on('newHostToken', (lobbyData) => {
    lobby = lobbyData;
    hostToken = lobbyData.hostToken;
    host = true;
    updateSettingsUI(newHost = true);
    updateBottomButtons();
  });

  socket.on('disconnect', () => {
    isConnected = false;
    hostToken = null;
    host = false;
    lobby = null
    playerId = null;
    spectator = false;
    game = {
      id: null,
      timeLeft: null,
      joined: false,
    };
  });

  socket.on('error', (err) => {
    console.log(err.message);
  });
}

function changePlayerName(newName) {
  const code = lobby.code;
  socket.emit('changePlayerName', code, newName);
}

function changePlayerspectatorStatus() {
  const code = lobby.code;
  socket.emit('changePlayerSpectatorStatus', code, spectator);
}

function updateSettings(newSettings) {
  const code = lobby.code;
  socket.emit('updateSettings', code, hostToken, newSettings);
}

function kickPlayer(playerIdToKick) {
  const code = lobby.code;
  socket.emit('kickPlayer', code, hostToken, playerIdToKick);
}

function joinTerriLobby() {
  const proxy = lobby.players.length === 1 ? 0 : 2;
  aM.a7U(proxy); // set lobby id to 2
  aM.dH() // Enter the lobby
}

function chooseGame(lobbyGames) {
  const code = lobby.code;
  var gameId = 0;
  var timeLeft = 0;
  for (let i = 0; i < lobbyGames.length; i++) {
    if (lobbyGames[i].timeLeft <= 3 || lobbyGames[i].gameMode == 8) {
      continue;
    }
    gameId = lobbyGames[i].id;
    timeLeft = lobbyGames[i].timeLeft;
    game.id = gameId;
    game.timeLeft = timeLeft;
    break;
  }
  socket.emit('startGame', code, hostToken, gameId);
}

function joinGame() {
  const code = lobby.code;
  aq.a7Z.a8u(game.id);
  game.joined = true;

  let timeOut = (game.timeLeft + 1) * 1000;
  setTimeout(() => {
    socket.emit('updateGameStatus', code, true);
  }, timeOut);
}

function backToLobby() {
  const code = lobby.code;
  game = {
    id: null,
    timeLeft: null,
    joined: false,
  }
  socket.emit('updateGameStatus', code, false);
}

function leaveLobby() {
  if (socket === undefined) {
    return;
  }
  socket.disconnect();

  isConnected = false;
  hostToken = null;
  host = false;
  lobby = null
  playerId = null;
  spectator = false;
  game = {
    id: null,
    timeLeft: null,
    joined: false,
  };
}

function sendChatMessage(message) {
  const code = lobby.code;
  socket.emit('chatMessage', code, message);
}