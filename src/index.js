function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Az én szivem sokat csatangolt,de most már okul és tanul.",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}
let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
