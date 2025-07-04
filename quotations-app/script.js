let text = document.getElementById("inputQuotes");
let author = document.getElementById("inputAuthors");
let selecteurs = document.getElementById("Selecteurs");
let quoteList = document.getElementById("quote-list")
let quoteCount = 0


selecteurs.addEventListener("submit", function(e){
    e.preventDefault()
    addQuote(text.value, author.value) 
});

function addQuote(quote, author){
    let paragraphText = document.createElement("p");
    let paragraphAuthor = document.createElement("p");
    let divQuote = document.createElement("div");
    let quoteCountHtml = document.getElementById("count") 

    paragraphText.setAttribute("class", "text");
    paragraphAuthor.setAttribute("class", "author");
    divQuote.setAttribute("class", "quote");

    paragraphText.innerHTML = quote;
    paragraphAuthor.innerHTML = author;

    divQuote.appendChild(paragraphText);  
    divQuote.appendChild(paragraphAuthor);
    quoteList.appendChild(divQuote);
    quoteCount +=1;
    quoteCountHtml.innerHTML = quoteCount + " citations"
}


