//tolowercase the string input



async function getFood() {
  const input = ''; //will be whatever is retrieved
  const updatedURL = apiURL + input; //URL that's being fetched / the call is being made to search
  try {
    const response = await fetch(updatedURL);
    if (!response.ok) {
      console.log('ERROR: ' + response.status);
      throw new Error('Food Unavailable');
    }
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log('Fetch Error: ', err);
  }
}

// getFood();
