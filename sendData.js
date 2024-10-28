const data = {
  name: "Test",
  code: 137
};

// Function to send data to the backend
function sendData() {
  fetch('https://<your-render-backend-url>/submit', { // Replace with your Render backend URL
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
  })
  .then(response => {
      if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json();
  })
  .then(responseData => {
      console.log(responseData); // Log the response from the server
      alert(responseData.message); // Show the response message
  })
  .catch(error => {
      console.error('Error:', error); // Handle errors
      alert('Failed to send data');
  });
}

sendData();