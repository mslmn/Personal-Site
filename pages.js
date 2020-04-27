// this is the data for holding which page we're on
let pageNumber = 0;

// have the content for these pages
const pages = [
  {
    copy: "an incoming UK Medical student",
    background: "#ee0073",
    circle: "#3da9fc",
  },

  {
    copy: "a big fan of everything medtech",
    background: "#232946",
    circle: "#e34a47",
  },

  {
    copy: "looking for a Front End internship",
    background: "#004643",
    circle: "#f9bc60",
  },

  {
    copy: `inviting you to connect on <a href="https://www.linkedin.com/in/m--sulaiman/">LinkedIn</a> <p>👋🏾</p>`,
    background: "#3da9fc",
    circle: "#ef4565",
  },
];

// pick the relevant tags
const prevTag = document.querySelector("footer svg.prev");
const nextTag = document.querySelector("footer svg.next");
const randomTag = document.querySelector("footer svg.random");
const outputTag = document.querySelector("section h2");
const bodyTag = document.querySelector("body");
const circleTag = document.querySelector("section div.circle");

// make a next function to increase the pageNumber
const next = function () {
  pageNumber = pageNumber + 1;

  if (pageNumber > pages.length - 1) {
    pageNumber = 0;
  }

  updateSection();
};

// make a previous function to decrease the pageNumber
const previous = function () {
  pageNumber = pageNumber - 1;

  if (pageNumber < 0) {
    pageNumber = pages.length - 1;
  }

  updateSection();
};

// pick a random slide
const random = function () {
  pageNumber = Math.floor(Math.random() * pages.length);
  updateSection();
};

// this will update the section's content and style
const updateSection = function () {
  outputTag.innerHTML = pages[pageNumber].copy;
  bodyTag.style.backgroundColor = pages[pageNumber].background;
  circleTag.style.backgroundColor = pages[pageNumber].circle;
  textTag.style.color = pages[pageNumber].textcolor;
};

// on click of nextTag, run this
nextTag.addEventListener("click", function () {
  next();
});

// on click of previousTag, run this
prevTag.addEventListener("click", function () {
  previous();
});

// on click of randomTag, run this
randomTag.addEventListener("click", function () {
  random();
});

//When a user presses a key, check for arrow left or right
//And do next or prev correctly
document.addEventListener("keyup", function (event) {
  //if the key being pressed is ArrowRight
  if (event.key === "ArrowRight") {
    next();
  }
  //if the key being pressed isArrowLeft
  if (event.key === "ArrowLeft") {
    previous();
  }
});
