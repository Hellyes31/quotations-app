let text = document.getElementById("inputQuotes");
let author = document.getElementById("inputAuthors");
let selecteurs = document.getElementById("Selecteurs");
let quoteList = document.getElementById("quote-list")
let paragraphText = document.createElement("p");
let paragraphAuthor = document.createElement("p");
let divQuote = document.createElement("div");


paragraphText.setAttribute("class", "text")
paragraphAuthor.setAttribute("class", "author")
divQuote.setAttribute("class", "quote")

selecteurs.addEventListener("submit", function(e){
    e.preventDefault()
    console.log(author.value)   
    console.log(text.value)  
});


