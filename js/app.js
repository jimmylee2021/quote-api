let quote = document.getElementById("quote-bx")
let author = document.getElementById("authour-bx")
let btn = document.getElementById("btn")

const url = "https://api.quotable.io/random";
function getQuotes() {
    fetch(url)
    .then(data => data.json())
    .then((item)=>{
        quote.innerHTML = item.content
        author.innerHTML = `-${item.author}`
    })
}

getQuotes()
setInterval(getQuotes, 10000)

btn.addEventListener('click', getQuotes)