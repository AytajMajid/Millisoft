var quotes = [
    {
        quote: "You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one.",
        person: "John Lennon",
    },

    {
        quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success",
        person: "James Cameron",
    },
    {
        quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
        person: "Steve Jobs",
    },

    {
        quote: "The future belongs to those who believe in the beauty of their dreams",
        person: "Eleanor Roosevelt",
    },

    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall",
        person: "Nelson Mandela",
    }
]
function writersDiv() {
    var random = (quotes[(Math.floor(Math.random() * quotes.length))]);
    document.getElementById("writer").innerHTML =
        `<p>"${random.quote}"</p>
 <h2>${random.person}</h2>`
}
function changeQuote() {
	let random = getRandomNumber(quotes);
	let activeQuote = quotes[random];
	quote.innerText = activeQuote.text;
	person.innerText = activeQuote.author;
}
quoteChange.onclick = changeQuote;
// task2
// function test() {
//     document.getElementById("listText").innerHTML += `<li>${inputAdd.value}</i> <i class="fa-solid fa-trash tras"></i><i class="fa-solid fa-square-check checkk" ></li>`
//     document.querySelectorAll("#listText li").forEach(element => {
//         element.children[0].addEventListener("click", function () {
//             element.remove()
//         })  
//         element.children[1].addEventListener("click", function () {
//             element.classList.add("complated")
//         }) 
//     });
//     inputAdd.value=""
// }




