
function add() {
	document.getElementById("listText1").innerHTML +=`<li class="listItem">${inputAdd.value}</li>`
	document.querySelectorAll(".listItem").forEach(item => {
		item.addEventListener("click", () => {
            item.classList.toggle("selected")
		})
	})
	inputAdd.value = ""
}



// function add(){
//     var a = document.querySelector("#listText")
//     document.getElementById("listText").innerHTML+= `<li>${inputAdd.value}</li>`
//     a.forEach(b => {
//         b.addEventListener('click', () => {
//         a.classList.remove('selected')
//         })
//         b.classList.add('selected');
//         inputAdd.value=""
//     });
// }

// function next(){
//     var b = document.getElementById("listText")
//     b.forEach(element => {
        
//     });
// }