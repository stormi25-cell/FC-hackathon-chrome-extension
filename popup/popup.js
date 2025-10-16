//tolowercase the string input

const input = document.getElementById('food');
const button = document.getElementById('submit');
button.addEventListener('onclick', test());
if (input) console.log(input);
if (button) console.log(button);
if (!button) console.log('wth');

function test() {
  alert('potato');
  console.log(input);
  console.log('egg');
}

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
