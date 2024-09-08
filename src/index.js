function displayRecipe(response) {
  console.log("recipe generated");
  new Typewriter("#recipe", {
    strings: [response.data.answer],
    autoStart: true,
    delay: 75,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "7a8aacadf32fc08tff87b375486o409c";
  let prompt =
    "User instructions: Generate a recipe about ${instructionsInput.value}";
  let context =
    "You are a reliable recipe expert. your mission is to generate a recipe in basic HTML. Be sure to follow the user's instructions.";
  let apiURL =
    "https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(prompt)}&context=${encodeURIComponent(context)}&key=${apiKey}";

  console.log("generating recipe");
  console.log("Prompt: ${prompt}");
  console.log("Context: ${context}");

  axios.get(apiURL).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
