/* 1-Change the font of the body element. */
const body = document.querySelector("body");
body.style.fontFamily = "Arial";

/* 2-Center the text of h1 on the page. */
const title = document.querySelector(".title");
title.style.textAlign = "center";
/* 3-The menu headings have a class named `category`. Select the elements by class name. Then, change the `color` and `font-style` of each element. */
const menuCategories = document.querySelectorAll(".category");
menuCategories.forEach((category) => {
  category.style.fontStyle = "italic";
  category.style.fontSize = "2rem";
  category.style.textDecoration = "underline";
});
/* 4-Create a function named "_colorGenerator_" that returns a different color. The returned random color should also include set transparency. Select the unordered lists with the class of `food-category`. Give each list a different background color using the function that you created.  */

function colorGenerator() {
  let letters = "0123456789ABCDEF";
  let randColor = "#";
  for (let i = 0; i < 6; i++) {
    randColor += letters[Math.floor(Math.random() * 16)];
  }
  randColor += "50";
  return randColor;
}

const foodCategories = document.querySelectorAll(".food-category");
foodCategories.forEach((cat) => {
  cat.style.backgroundColor = colorGenerator();
  cat.style.minWidth = "300px";
  cat.style.height = "6rem";
  cat.style.textAlign = "left";
  cat.style.listStylePosition = "inside";
  cat.style.padding = "1rem";
  cat.style.borderRadius = "5px";
});
/* 5-Align the `food-category` lists in a row on desktop. Make sure that the page is responsive and also works on mobile.
 */

const mainSection = document.querySelector(".main");
mainSection.style.display = "flex";
mainSection.style.flexFlow = "row wrap";
mainSection.style.justifyContent = "space-around";
mainSection.style.alignItems = "center";
mainSection.style.boxSizing = "border-box";
/* 6-Select the warning at the end of the page by its id `warning`. Select the id without using a querySelector. Change the size and font of the `warning`.
 */

let warning = document.getElementById("warning");
warning.style.fontSize = "2rem";
warning.style.marginBottom = "0";
warning.style.marginLeft = "1.5rem";

/* 7-Select all _even_ `allergy-info` items. Give the even items a different background color. */
const allergyItems = document.querySelectorAll(".allergy-info");
allergyItems.forEach((items, index) => {
  if (index % 2 === 1) {
    items.style.backgroundColor = colorGenerator();
  }
  items.style.paddingLeft = "1rem";
  items.style.lineHeight = "2rem";
  items.style.listStyle = "none";
  items.style.minWidth = "20rem";
});

/* 8-Make the `allergy-warning` appear as a column in the center of the page. */

const allergyWarning = document.querySelector(".allergy-warning");
allergyWarning.style.display = "flex";
allergyWarning.style.flexFlow = "column";
allergyWarning.style.justifyContent = "center";
allergyWarning.style.alignItems = "center";

/* 9-The descriptions in the footer should also be styled, e.g. a rounded border with a background color. They should appear in a column for mobile and in a row for desktop. */
const footer = document.querySelector(".footer");
footer.style.display = "flex";
footer.style.flexFlow = "row wrap";
footer.style.justifyContent = "center";

const foodDescription = document.querySelectorAll(".food-desc");
foodDescription.forEach((el) => {
  el.style.border = "5px solid orange";
  el.style.borderRadius = "100%";
  el.style.height = "10rem";
  el.style.width = "10rem";
  el.style.display = "flex";
  el.style.justifyContent = "center";
  el.style.alignItems = "center";
  el.style.margin = "1rem";
});
