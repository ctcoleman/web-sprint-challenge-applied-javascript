// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element
const topicsDiv = document.querySelector('.topics')

function tabMaker (topic) {
  const tab = document.createElement('div')

  tab.classList.add('tab')

  tab.textContent = `${topic}`
  
}
const topicsURL = 'https://lambda-times-backend.herokuapp.com/topics'

axios.get(topicsURL)
  .then((value) => {
    let topics = value.data.topics
    topics.forEach((topic) => {
      console.log(topic)
      const createdTab = tabMaker(topic)
      topicsDiv.appendChild(createdTab)
    })
  })
  .catch(function (error) {
    console.log(error)
  })
  
