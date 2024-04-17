var img = document.querySelectorAll(".img")
img.forEach(item => {
    item.addEventListener("click", function () {
        document.getElementById("jsMain").style.display = "block"
        var head = (item.parentElement.children[0].getAttribute("src"))
        // var text = (item.parentElement.children[1].innerText)
        document.getElementById("foto").setAttribute("src", head);
        // document.getElementsById("test").setAttribute("test", text);
        test.innerText = item.parentElement.children[1].innerText

    })
})

function goBack() {
    document.querySelector("#jsMain").style.display = "none"
}
