const QUOTEBANK = [
  {
    quote: "How little a thing can make us happy when we feel that we have earned it.",
    author: "Mark Twain"
  },
  {
    quote: "Nobody sees a flower - really - it is so small it takes time - we haven't time - and to see takes time, like to have a friend takes time.",
    author: "Georgia O'Keeffe"
  },
  {
    quote: "For the skeptic there remains only one consolation: if there should be such a thing as superhuman law it is administered with subhuman inefficiency.",
    author: "Eric Ambler"
  },
  {
    quote: "I will not allow yesterday's success to lull me into today's complacency, for this is the great foundation of failure.",
    author: "Og Mandino"
  },
  {
    quote: "When you encounter seemingly good advice that contradicts other seemingly good advice, ignore them both.",
    author: "Al Franken"
  },
  {
    quote: "I've done the calculation and your chances of winning the lottery are identical whether you play or not.",
    author: "Fran Lebowitz"
  },
  {
    quote: "Life isn't long enough for love and art.",
    author: "W. Somerset Maugham"
  },
  {
    quote: "Nurture your mind with great thoughts; to believe in the heroic makes heroes.",
    author: "Benjamin Disraeli"
  }    
  ];

  window.onload = init;
  function init() {
    generateQuote();
  }

  function generateQuote() {
    let myNumber = Math.floor(Math.random(QUOTEBANK) * QUOTEBANK.length);
    let randomPick = QUOTEBANK[myNumber];

    document.getElementById("text").innerText = randomPick.quote;
    document.getElementById("author").innerText = randomPick.author;
  }