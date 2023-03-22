const quotes = [
  {
    quote:
      "Your time is limited, so don’t waste it living someone else’s life.",
    author: "Steve Jobs",
  },
  {
    quote: "God never abandons the brave",
    author: "KENLER",
  },
  {
    quote:
      "God, hopefully give me the calmness of accepting things that I can't change, the courage to change things that I can change, and the wisdom to always tell the difference.",
    author: "Reinhold Niebuhr",
  },
  {
    quote: "If you make a confident expression, you gain confidence.",
    author: "Charles Darwin",
  },
  {
    quote:
      "Let's do something.Everything is for the happiness of others, especially for my happiness.",
    author: "Tolstoy",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
