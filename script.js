

const projects=[
  {
    id: 1,
    
    title: "Expend Card Showcase",
    link: "./card/expend.html",
    description: "an interactive UI with expandable cards that display more content on click. It features smooth animations, responsive design, and simple JavaScript for toggling active states."
    
  },
  {
    id: 2,
    
    title: "Expend Card Showcase",
    link: "./card/expend.html",
    description: "an interactive UI with expandable cards that display more content on click. It features smooth animations, responsive design, and simple JavaScript for toggling active states."
  },
  {
    id: 3,
    
    title: "Expend Card Showcase",
    link: "./card/expend.html",
    description: "an interactive UI with expandable cards that display more content on click. It features smooth animations, responsive design, and simple JavaScript for toggling active states."
    
    
  },
  {
    id: 4,
    
    title: "Expend Card Showcase",
    link: "./card/expend.html",
    description: "an interactive UI with expandable cards that display more content on click. It features smooth animations, responsive design, and simple JavaScript for toggling active states."
    
  },
  {
    id: 5,
    
    title: "Expend Card Showcase",
    link: "./card/expend.html",
    description: "an interactive UI with expandable cards that display more content on click. It features smooth animations, responsive design, and simple JavaScript for toggling active states."
    
  },
  {
    id: 6,
    
    title: "Expend Card Showcase",
    link: "./card/expend.html",
    description: "an interactive UI with expandable cards that display more content on click. It features smooth animations, responsive design, and simple JavaScript for toggling active states."
    
  },
  {
    id: 7,
    
    title: "Expend Card Showcase",
    link: "./card/expend.html",
    description: "an interactive UI with expandable cards that display more content on click. It features smooth animations, responsive design, and simple JavaScript for toggling active states."
    
  },
  {
    id: 8,
   
    title: "Expend Card Showcase",
    link: "./card/expend.html",
    description: "an interactive UI with expandable cards that display more content on click. It features smooth animations, responsive design, and simple JavaScript for toggling active states."
    
  },
  {
    id: 9,

    title: "Expend Card Showcase",
    link: "./card/expend.html",
    description: "an interactive UI with expandable cards that display more content on click. It features smooth animations, responsive design, and simple JavaScript for toggling active states."
    
  }
]
function getDate() {
  return new Date().toLocaleDateString("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "2-digit",
  });
}

function updateIndex(index) {
  return index.toString().padStart(3, '0'); // ensures the index is always 3 digits
}

const listContainer = document.getElementById("list__item");
listContainer.innerHTML= "";
let flippedCard = null;

projects.forEach((project, index) => {
  const listItem = document.createElement("li");
  listItem.classList.add("item");

  const updatedIndex = updateIndex(index + 1);

  listItem.innerHTML = `
  <div class="item__front">
      <span class="item__index">${project.index || updatedIndex}</span>
      <p class="item__title">${project.title}</p>
  </div>

  <div class="item__back">
    <p class="item__description">${project.description}</p>
    <div class="item__action">
    <span class="item__date">${project.date || getDate()}</span>
    <a href="${project.link}" class="item__link">See project</a>
    </div>
  </div>
`;
listItem.addEventListener('click', () => {
  if (flippedCard && flippedCard !== listItem) {
    listItem.classList.add('flipped');

    setTimeout(() => {
      flippedCard.classList.remove('flipped');
      flippedCard = listItem; 
    }, 400);
  } else {
    // If no card is flipped OR clicking the same card, just toggle it
    listItem.classList.toggle('flipped');
    flippedCard = listItem.classList.contains('flipped') ? listItem : null;
  }
});


listContainer.appendChild(listItem);
})



