function generateRecipe(event) {
  event.preventDefault();

  new Typewriter("#recipe", {
    strings: ["12 amazing salads to compliment your meal"],
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
