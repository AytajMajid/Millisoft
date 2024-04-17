var element = document.querySelectorAll(".plus")
element.forEach(item =>{
    item.addEventListener("click", function(){
document.querySelector(".jsDiv").style.display = "block"
        var head = (item.previousElementSibling.getAttribute("src"))
        foto.setAttribute("src" , head)
        client.innerText = item.parentElement.parentElement.nextElementSibling.children[0].innerText
        category.innerText = item.parentElement.parentElement.nextElementSibling.children[1].innerText    })
    })

function goBack(){
    document.querySelector(".jsDiv").style.display = "none"
}



