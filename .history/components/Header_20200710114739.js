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

  const date = document.createElement('span')
  date.classList.add('date')
  date.textContent = 'MARCH 28, 2020'

  const heading = document.createElement('h1')
  heading.textContent = 'Lambda Times'

  const temp = document.createElement('span')
  temp.textContent = `98°`

  document.appendChild(headerWrapper)
  headerWrapper.appendChild(date)
  headerWrapper.appendChild(heading)
  headerWrapper.appendChild(h)
}

Header()