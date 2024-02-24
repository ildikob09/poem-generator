function displayPoem(response) {
  console.log("poem is generated");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let userInstructions = document.querySelector("#user-instructions");
  let apiKey = `befe28ed9d48eac93fd074tafa91d7of`;
  let prompt = `generate a poem in Hungarian with no more than 4 lines about ${userInstructions.value}. User instructions must be followed`;
  let context = `you are an AI who is a poet. User instructions: You have to sign the poem as "SheCodes AI" underneath the poem using <strong> element to display and use <br /> to separate each lines`;

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  console.log(apiUrl);

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML =
    poemElement.innerHTML = `<div class="blink">Generating poem about ${userInstructions.value}</div>`;

  console.log(`generating poem`);
  console.log(`prompt: ${prompt}`);
  console.log(`context: ${context}`);

  axios.get(apiUrl).then(displayPoem);
}
let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
