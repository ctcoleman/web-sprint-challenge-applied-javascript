// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
  const headerWrapper = document.createElement('div')
  headerWrapper.classList.add('header')

  console.log(headerWrapper)

  const date = document.createElement('span')
  date.classList.add('date')
  date.textContent = 'MARCH 28, 2020'

  console.log(date)
}

Header()