const quotes = [
  "Don't watch the clock; do what it does. Keep going.",
  "You miss 100% of the shots you don't take.",
  "The best way to predict the future is to create it.",
  "Believe you can and you're halfway there.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "A goal is a dream with a deadline.",
  "You must be the change you wish to see in the world.",
  "Happiness is not something ready made. It comes from your own actions."
];

const quoteEl = document.getElementById("quote");
const refreshBtn = document.getElementById("refreshBtn");

refreshBtn.addEventListener("click", () => {
  quoteEl.textContent = quotes[Math.floor(Math.random() * quotes.length)];
});

quoteEl.textContent = quotes[0];
