const settingsLabel = {
  mapID: {
    label: 'Map',
    0: 'White Arena',
    1: 'Black Arena',
    2: 'Island',
    /* 3: 'Mountains 1', */
    4: 'Desert',
    5: 'Swamp',
    6: 'Snow',
    7: 'Cliffs',
    8: 'Pond',
    9: 'Halo',
    10: 'Europe',
    11: 'World',
    12: 'Caucasia',
    13: 'Africa',
    14: 'Middle East',
    15: 'Scandinavia',
    16: 'North America',
    17: 'South America',
    18: 'Asia',
    19: 'Australia',
    20: 'Island Kingdom',
    /* 21: 'Mountains 2', */
    22: 'Random',
    23: 'Random (Competitive)',
    24: 'Random (Comp + Small)',
  },
  gameMode: {
    label: 'Game Mode',
    0: '2 Teams',
    1: '3 Teams',
    2: '4 Teams',
    3: '5 Teams',
    4: '6 Teams',
    5: '7 Teams',
    6: '8 Teams',
    7: 'Battle Royale',
    9: 'Zombies',
    10: 'No Fullsend'
  },
  difficulty: {
    label: 'Difficulty',
    0: 'Very Easy',
    1: 'Easy',
    2: 'Normal',
    3: 'Hard',
    4: 'Very Hard',
    5: 'Impossible',
  },
}

const randomMap = [0, 1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const randomMapCompetitive = [1, 4, 5, 6, 8, 10, 12, 13, 14, 16];
const randomMapCompSmall = [1, 4, 5, 6, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

const probabilitiesCompetitive = [0.4, 0.1, 0.05, 0.075, 0.1, 0.05, 0.75, 0.05, 0.05, 0.05];
const probabilitiesCompSmall = [0.3, 0.075, 0.04, 0.06, 0.075, 0.04, 0.04, 0.06, 0.05, 0.05, 0.04, 0.05, 0.04, 0.04, 0.04];

function getRandomElementWithProbabilities(elements, probabilities) {
  const cumulativeProbabilities = [];
  let sum = 0;

  for (let i = 0; i < probabilities.length; i++) {
    sum += probabilities[i];
    cumulativeProbabilities[i] = sum;
  }

  const random = Math.random() * sum;

  for (let i = 0; i < cumulativeProbabilities.length; i++) {
    if (random < cumulativeProbabilities[i]) {
      return elements[i];
    }
  }
}

function createPreCustomLobbyUI() {
  const canvasA = document.getElementById('canvasA');
  if (canvasA) {
    canvasA.classList.add('hidden');
  }

  const background = document.createElement('div');
  background.className = 'custom-lobby-background';

  document.body.appendChild(background);

  const lobbyCodeInput = document.createElement('input');
  lobbyCodeInput.className = 'input-lobby-code';
  lobbyCodeInput.type = 'text';
  lobbyCodeInput.placeholder = 'Enter Lobby Code';

  lobbyCodeInput.addEventListener('input', (event) => {
    lobbyCodeInput.value = event.target.value.toUpperCase();
  });

  background.appendChild(lobbyCodeInput);

  const createLobbyButton = document.createElement('button');
  createLobbyButton.className = 'enter-lobby-button create-lobby';
  createLobbyButton.textContent = 'Create Lobby';

  createLobbyButton.addEventListener('click', () => {
    const lobbyCode = lobbyCodeInput.value;
    const playerName = bY.dZ.data[122].value.slice(0, 20);
    connectToServer(lobbyCode, playerName, true);

    createLobbyButton.disabled = true;
    setTimeout(() => {
      createLobbyButton.disabled = false;
    }, 3000);
  });

  const joinLobbyButton = document.createElement('button');
  joinLobbyButton.className = 'enter-lobby-button join-lobby';
  joinLobbyButton.textContent = 'Join Lobby';

  joinLobbyButton.addEventListener('click', () => {
    const lobbyCode = lobbyCodeInput.value;
    const playerName = bY.dZ.data[122].value.slice(0, 20);
    connectToServer(lobbyCode, playerName);

    joinLobbyButton.disabled = true;
    setTimeout(() => {
      joinLobbyButton.disabled = false;
    }, 3000);
  });

  background.appendChild(createLobbyButton);
  background.appendChild(joinLobbyButton);

  const leaveLobbyButton = document.createElement('button');
  leaveLobbyButton.className = 'leave-lobby-button';
  leaveLobbyButton.textContent = 'Back';
  leaveLobbyButton.style.fontSize = '16px';
  leaveLobbyButton.style.width = '128px';
  leaveLobbyButton.style.height = '32px';
  // leaveLobbyButton.style.top = 'calc(40% + 7rem)';
  leaveLobbyButton.style.top = 'calc(40% + 112px)';
  leaveLobbyButton.style.left = '50%';
  leaveLobbyButton.style.borderRadius = '16px';

  leaveLobbyButton.addEventListener('click', () => {
    backToMainMenu();
  });

  background.appendChild(leaveLobbyButton);
}

function createCustomLobbyUI() {
  const background = document.querySelector('.custom-lobby-background');
  // remove all children
  while (background.firstChild) {
    background.removeChild(background.firstChild);
  }

  createUsernameInput(background);
  createPlayerList(background);
  createPasswordInput(background);
  createSettingsUI();
  createBottomButtons(background);

}

function createUsernameInput(background) {
  const usernameInput = document.createElement('input');
  usernameInput.className = 'input-username';
  usernameInput.type = 'text';
  usernameInput.placeholder = 'Username';

  usernameInput.addEventListener('input', (event) => {
    usernameInput.value = event.target.value.slice(0, 20);
  });

  usernameInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      changePlayerName(usernameInput.value);
    }
  });

  background.appendChild(usernameInput);
}

function createPlayerList(background) {
  var playersContainer = document.querySelector('.players-container');
  if (playersContainer) {
    while (playersContainer.firstChild) {
      playersContainer.removeChild(playersContainer.firstChild);
    }
  } else {
    playersContainer = document.createElement('div');
    playersContainer.className = 'players-container';
    background.appendChild(playersContainer);
  }

  const playerRow = document.createElement('div');
  playerRow.className = 'player-row';

  const playerListTitle = document.createElement('label');
  playerListTitle.className = 'player-list-title';
  playerListTitle.textContent = `${lobby.players.length} Players`;

  playerRow.appendChild(playerListTitle);
  playersContainer.appendChild(playerRow);

  lobby.players.forEach((player) => {
    const playerRow = document.createElement('div');
    playerRow.className = 'player-row';

    const playerNameContainer = document.createElement('div');
    playerNameContainer.className = 'player-name-container';

    playerRow.appendChild(playerNameContainer);

    const playerName = document.createElement('span');
    playerName.className = 'player-name';
    playerName.textContent = player.name;

    playerNameContainer.appendChild(playerName);

    if (player.id === playerId) {
      const spectateButton = document.createElement('button');
      spectateButton.className = 'spectate-button';
      spectateButton.textContent = spectator ? 'Unspectate' : 'Spectate';

      spectateButton.addEventListener('click', () => {
        spectator = !spectator;
        spectateButton.textContent = spectator ? 'Unspectate' : 'Spectate';
        changePlayerspectatorStatus();
      });

      playerNameContainer.appendChild(spectateButton);
    }

    const playerActions = document.createElement('div');
    playerActions.className = 'player-actions';

    playerRow.appendChild(playerActions);

    if (player.inGame) {
      const inGameIcon = document.createElement('div');
      inGameIcon.className = 'player-icon in-game';
      inGameIcon.textContent = 'In Game';
      
      playerActions.appendChild(inGameIcon);
    }

    if (player.spectator) {
      const spectatorIcon = document.createElement('div');
      spectatorIcon.className = 'player-icon spectator';
      spectatorIcon.textContent = 'Spectator';
      
      playerActions.appendChild(spectatorIcon);
    }
  
    if (player.id === lobby.hostID) {
      const hostIcon = document.createElement('div');
      hostIcon.className = 'player-icon host';
      hostIcon.textContent = 'Host';
      
      playerActions.appendChild(hostIcon);
    }

    if (host && player.id !== lobby.hostID) {
      const kickButton = document.createElement('button');
      kickButton.className = 'kick-button';
      kickButton.textContent = 'Kick';
      
      kickButton.addEventListener('click', () => {
        kickPlayer(player.id);
      });
      
      playerActions.appendChild(kickButton);
    }
    playersContainer.appendChild(playerRow);
  });

}  

function createPasswordInput(background) {
  const settings = document.createElement('div');
  settings.className = 'settings-container';
  background.appendChild(settings);

  const passwordRowContainer = document.createElement('div');
  passwordRowContainer.className = 'settings-row password';

  const passwordLabel = document.createElement('label');
  passwordLabel.className = 'settings-label';
  passwordLabel.textContent = 'Code';

  const passwordInput = document.createElement('input');
  passwordInput.className = 'password-input';
  passwordInput.type = 'password';
  passwordInput.value = lobby.code;
  passwordInput.disabled = true;

  const passwordToggle = document.createElement('span');
  passwordToggle.className = 'password-toggle';
  const passwordToggleIcon = document.createElement('i');
  passwordToggleIcon.className = 'fas fa-eye-slash';

  passwordToggle.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      passwordToggleIcon.className = 'fas fa-eye';
    } else {
      passwordInput.type = 'password';
      passwordToggleIcon.className = 'fas fa-eye-slash';
    }
  });
  
  background.appendChild(passwordRowContainer);
  passwordRowContainer.appendChild(passwordLabel);
  passwordRowContainer.appendChild(passwordInput);
  passwordRowContainer.appendChild(passwordToggle);
  passwordToggle.appendChild(passwordToggleIcon);
}

function createSettingsUI() {
  const settings = document.querySelector('.settings-container');

  Object.keys(settingsLabel).forEach((key) => {
    const settingsRow = document.createElement('div');
    settingsRow.className = 'settings-row';
    
    const label = document.createElement('label');
    label.className = 'settings-label';
    label.textContent = settingsLabel[key]['label'];
    
    const dropdown = document.createElement('select');
    dropdown.className = 'settings-dropdown';
    dropdown.id = `dropdown-${key}`;
    
    Object.keys(settingsLabel[key]).forEach((value) => {
      if (value === 'label') {
        return;
      }
      const option = document.createElement('option');
      option.value = value;
      option.textContent = settingsLabel[key][value];
      dropdown.appendChild(option);

      if (lobby.settings[key] == value) {
        option.selected = true;
      }
    });
  
    dropdown.addEventListener('change', (event) => {
      if (host) {
        let value = parseInt(event.target.value);
        lobby.settings[key] = value;

        if (key === 'mapID' && value < 22) {
          lobby.settings.randomMapID = null;
        }
        updateSettings(lobby.settings);
      }
    });
    if (!host) {
      dropdown.disabled = true;
    }

    settings.appendChild(settingsRow);
    settingsRow.appendChild(label);
    settingsRow.appendChild(dropdown);
  });

  const settingsRow = document.createElement('div');
  settingsRow.className = 'settings-row';
  
  const label = document.createElement('label');
  label.className = 'settings-label';
  label.textContent = 'Close Lobby';

  const switchContainer = document.createElement('label');
  switchContainer.className = 'switch-container';

  const switchCheckbox = document.createElement('input');
  switchCheckbox.type = 'checkbox';
  switchCheckbox.id = 'dropdown-closeLobby';

  const switchSlider = document.createElement('span');
  switchSlider.className = 'slider round';

  switchCheckbox.addEventListener('change', (event) => {
    if (host) {
      lobby.settings.open = !event.target.checked;
      updateSettings(lobby.settings);
    }
  });
  if (!host) {
    switchCheckbox.disabled = true;
  }

  settings.appendChild(settingsRow);
  settingsRow.appendChild(label);
  settingsRow.appendChild(switchContainer);
  switchContainer.appendChild(switchCheckbox);
  switchContainer.appendChild(switchSlider);
}

function createBottomButtons(background) {
  const leaveLobbyButton = document.createElement('button');
  leaveLobbyButton.className = 'leave-lobby-button';
  leaveLobbyButton.textContent = 'Back';
  leaveLobbyButton.style.top = 'calc(100% - 4rem)';
  leaveLobbyButton.style.left = 'calc(50% + 5rem';

  leaveLobbyButton.addEventListener('click', () => {
    backToMainMenu();
  });

  background.appendChild(leaveLobbyButton);

  const startGameButton = document.createElement('button');
  startGameButton.className = 'start-game-button';
  var textContent = game.joined ? `${game.timeLeft}s` : 'Start Game';
  startGameButton.textContent = textContent;

  startGameButton.addEventListener('click', () => {
    if (host) {
      startGameButton.disabled = true;
      checkRandomMap();
      joinTerriLobby();
    }
  });
  if (!host) {
    startGameButton.disabled = true;
  }

  background.appendChild(startGameButton);
}

function updateSettingsUI(newHost = false) {
  Object.keys(settingsLabel).forEach((key) => {
    const dropdown = document.getElementById(`dropdown-${key}`);
    if (dropdown) {
      dropdown.value = lobby.settings[key];
      if (newHost) {
        dropdown.disabled = false;
      }
    }
  });
  const closeLobbyOption = document.getElementById('dropdown-closeLobby');
  if (closeLobbyOption) {
    closeLobbyOption.checked = !lobby.settings.open;
    if (newHost) {
      closeLobbyOption.disabled = false;
    }
  }
}

function updateBottomButtons() {
  const startGameButton = document.querySelector('.start-game-button');
  if (startGameButton) {
    var textContent = game.joined ? `${game.timeLeft}s` : 'Start Game';
    startGameButton.textContent = textContent;
    startGameButton.disabled = !host || game.id != null;
  }
}

function lobbyUIHide() {
  const background = document.querySelector('.custom-lobby-background');
  if (background) {
    background.classList.add('hidden');
  }

  const canvasA = document.getElementById('canvasA');
  if (canvasA) {
    canvasA.classList.remove('hidden');
  }
}

function lobbyUIShow() {
  const background = document.querySelector('.custom-lobby-background');
  if (background) {
    background.classList.remove('hidden');
  }

  const canvasA = document.getElementById('canvasA');
  if (canvasA) {
    canvasA.classList.add('hidden');
  }

  updateBottomButtons();
}

function checkRejoinCustomLobby() {
  if (lobby) {
    backToLobby();
    i.rX();
    lobbyUIShow();
  }
}

function backToMainMenu() {
  const canvasA = document.getElementById('canvasA');
  if (canvasA) {
    canvasA.classList.remove('hidden');
  }

  const background = document.querySelector('.custom-lobby-background');
  if (background) {
    background.remove();
  }
  leaveLobby();
  a1.wh();
}

function checkRandomMap() {
  if (lobby.settings.mapID === 22) {
    lobby.settings.randomMapID = randomMap[Math.floor(Math.random() * randomMap.length)];
  } else if (lobby.settings.mapID === 23) {
    lobby.settings.randomMapID = getRandomElementWithProbabilities(randomMapCompetitive, probabilitiesCompetitive);
  } else if (lobby.settings.mapID === 24) {
    lobby.settings.randomMapID = getRandomElementWithProbabilities(randomMapCompSmall, probabilitiesCompSmall);
  }
  updateSettings(lobby.settings);
}