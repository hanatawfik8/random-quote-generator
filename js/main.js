var quoteText = document.getElementById("quote-text"),
    quoteAuthor = document.getElementById("quote-author"),
    currentRandom, previousRandom,
    quotes = [
        {
            text: "“Be yourself; everyone else is already taken.”",
            author: "― Oscar Wilde"
        },
        {
            text: "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
            author: "― Bernard M. Baruch"
        },
        {
            text: "“Be the change that you wish to see in the world.”",
            author: "― Mahatma Gandhi"
        },
        {
            text: "“If you tell the truth, you don't have to remember anything.”",
            author: "― Mark Twain"
        },
        {
            text: "“A friend is someone who knows all about you and still loves you.”",
            author: "― Elbert Hubbard"
        },
        {
            text: "“Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.”",
            author: "― Martin Luther King Jr."
        },
        {
            text: "“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”",
            author: "― Ralph Waldo Emerson"
        },
        {
            text: "“It is better to be hated for what you are than to be loved for what you are not.”",
            author: "― Andre Gide"
        },
        {
            text: "“In three words I can sum up everything I've learned about life: it goes on.”",
            author: "― Robert Frost"
        },
        {
            text: '“Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself . . .”',
            author: "― C.S. Lewis"
        }
    ];

function generateQuote() {
    do {
        currentRandom = Math.floor(Math.random() * 10);
    } while (currentRandom == previousRandom);

    quoteText.innerHTML = quotes[currentRandom].text;
    quoteAuthor.innerHTML = quotes[currentRandom].author;
    previousRandom = currentRandom;
}