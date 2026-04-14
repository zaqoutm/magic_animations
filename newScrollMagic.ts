import ScrollMagic from "scrollmagic";

// animate red section
new ScrollMagic({
  element: ".green-section",
});

// animate green section
const green = new ScrollMagic({
  element: ".green-section",
  containerStart: "center",
  containerEnd: "center",
  // elementStart: -50,
  // elementEnd: -100,
  // elementEnd: (size) => size - 150,
  // elementStart: "here",
  // elementEnd: "here",
})
  .on("enter", (e) => {
    // do something!
    e.target.element.classList = "green";
  })
  .on("leave", (e) => {
    e.target.element.classList = "out";
  });
