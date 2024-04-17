document.querySelectorAll("#buttons button").forEach(btn => {
    btn.addEventListener('click', function () {
        document.querySelectorAll("#buttons button").forEach(otherBtn => {
            otherBtn.classList.remove("active")
        })
        this.classList.add("active")
        this.getAttribute('filter')
        if (this.getAttribute('filter') == "all") {
            document.querySelectorAll(".imgs1").forEach(imgs => {
                imgs.style.display = "block"
            })
        }
        else {
            document.querySelectorAll(".imgs1").forEach(imgs => {
                if (this.getAttribute('filter') == imgs.getAttribute('filter')) {
                    imgs.style.display = "block"
                }
                else {
                    imgs.style.display = "none"
                }
            })
        }
    })
})
