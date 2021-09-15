const jokeText = document.querySelector(".joke");
const jokeBtn = document.querySelector(".joke-button");

jokeBtn.addEventListener("click", generateJoke);

generateJoke();

// Async function which calls Joke API to generate random jokes
async function generateJoke() {
  const response = await fetch(
    "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,racist"
  );
  const data = await response.json();
  let joke = " ";
  if (data.joke === undefined) {
    joke = `${data.setup} <br/> ${data.delivery}`;
  } else {
    joke = data.joke;
  }
  jokeText.innerHTML = joke;
}
