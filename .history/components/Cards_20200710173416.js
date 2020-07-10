// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.


function cardCreator({ headline, authorPhoto, authorName }) {
  const cardWrapper = document.createElement('div')
  cardWrapper.className = 'card'
  const heading = document.createElement('div')
  heading.textContent = `${headline}`
  heading.classList.add('headline')
  const author = document.createElement('div')
  author.className = 'author'
  const imageContainer = document.createElement('div')
  imageContainer.className = 'img-container'
  const image = document.createElement('img')
  image.src = authorPhoto
  const name = document.createElement('span')
  name.textContent = `By ${authorName}`

  cardWrapper.appendChild(heading)
  cardWrapper.appendChild(author)
  author.appendChild(imageContainer)
  imageContainer.appendChild(image)
  author.appendChild(name)
  
  console.log(cardWrapper)
  return cardWrapper
}

const articlesURL = 'https://lambda-times-backend.herokuapp.com/articles'

axios.get(articlesURL)
  .then((value) => {
    const articles = value.data.articles
    
    for (let topics in articles) {
      createCard(topics)
    }
    debugger
    const cardContainer = document.querySelector('.cards-container')

    function createCard(type) {
      type.forEach((item) => {
        cardContainer.appendChild(cardCreator(item))
      })
    }
    createCard(bootstrap)
    createCard(javascript)
    createCard(jquery)
    createCard(node)
    createCard(technology)

    const card = document.querySelectorAll('.card')
    card.forEach((card) => {
      const heading = card.querySelector('.headline')
      card.addEventListener('click', () => {
        console.log(heading.textContent)
      })
    })

  })
  .catch((e) => {
    console.log(e)
  })
