//tolowercase the string input
const apiKey = 'MwYL1bXDO0ZNj6DZjthS2g==jrFRY9yXOOht33Iv';
const apiURL = 'https://api.api-ninjas.com/v1/nutrition?query=';
//user food input
// const input = document.getElementById('submit').value;
// const input = document.getElementById('food').value;

const button = document.getElementById('submit');
// button.addEventListener('onclick', getFood());
// let count = 0;
const input = document.getElementById('food');

button.addEventListener('onclick', testInput());

// const form = document.querySelector('submit', (e) => {
//   e.preventDefault();
//   const data = new FormData(e.target);
//   console.log(data);
//   console.log(data.food);
// });
testItem = [
  {
    name: 'egg',
    calories: 'Only available for premium subscribers.',
    serving_size_g: 'Only available for premium subscribers.',
    fat_total_g: 9.7,
    fat_saturated_g: 3.1,
    protein_g: 'Only available for premium subscribers.',
    sodium_mg: 139,
    potassium_mg: 199,
    cholesterol_mg: 371,
    carbohydrates_total_g: 0.7,
    fiber_g: 0,
    sugar_g: 0.4,
  },
];

// async function getFood() {
//   console.log(input);

//   const updatedURL = apiURL + input; //URL that's being fetched / the call is being made to search
//   console.log(updatedURL);
//   console.log(input);

//   try {
//     const response = await fetch(updatedURL, {
//       headers: {
//         'X-API-KEY': apiKey,
//       },
//     });
//     if (!response.ok) {
//       console.log('ERROR: ' + response.status);
//       throw new Error('Food Unavailable');
//     }
//     console.log(response);
//     const data = await response.json();
//     console.log(data);
//     console.log(JSON.stringify(data));
//     console.log(data['sugar_g']);
//     document.getElementById('NuInf').innerHTML = JSON.stringify(data);
//   } catch (err) {
//     console.log('Fetch Error: ', err);
//   }
// }

function testInput() {
  // ++count;
  console.log('anything');
  // console.log(count);
  console.log(input);
  console.log(button);
  console.log(input.value);
  console.log(button.value);
  // document.getElementById('NuInf').innerHTML = `
  //       name: 'egg',
  //       calories: 'Only available for premium subscribers.',
  //       serving_size_g: 'Only available for premium subscribers.',
  //       fat_total_g: 9.7,
  //       fat_saturated_g: 3.1,
  //       protein_g: 'Only available for premium subscribers.',
  //       sodium_mg: 139,
  //       potassium_mg: 199,
  //       cholesterol_mg: 371,
  //       carbohydrates_total_g: 0.7,
  //       fiber_g: 0,
  //       sugar_g: 0.4,`;
  // console.log(testItem['name']);
  // console.log(testItem[0]['name']);
}

// const reset = document
//   .getElementById('reset')
//   .addEventListener(onclick, () => alert('Reset'));

// function reset() {
//   alert('Reset');
// }
