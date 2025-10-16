//where the main functionality will happen, taking information from the popup.js file
// chrome.runtime


//variables from DOM

const apiKey = "MwYL1bXDO0ZNj6DZjthS2g==jrFRY9yXOOht33Iv";
const apiURL = "https://api.api-ninjas.com/v1/nutrition?query=";
//on button click
add event listener ('button', () => {
    // variables:
    const input = ""; //will be whatever is retrieved
    const updatedURL = apiURL + input;
    fetch (updatedURL, {
        headers: {
            'X-API-KEY': apiKey
        }
    }).then(response => {
        if (!response.ok) {
            console.log('ERROR');
            throw new Error('Food Unavailable');
          }
        return response.json()})
    .then (data => {
        console.log(data);
        //doing something .innerHTML
        //might have to STRINGIFY with JSON.stringify(data)
        //also, the dfif keys:
    }).catch (error => {
        console.log(error);
    })
})