const data = {
  code: 137,
};

function createLobby() {
  fetch("https://territorial-custom-lobbies-backend.onrender.com/createLobby", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json();
    })
    .then((responseData) => {
      console.log(responseData);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

createLobby();
