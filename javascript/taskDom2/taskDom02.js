function add() {
	document.getElementById("listText1").innerHTML +=`<li class="listItem">${inputAdd.value}</li>`
	document.querySelectorAll(".listItem").forEach(item => {
		item.addEventListener("click", () => {
            item.classList.toggle("selected")
			
		})
	})
	inputAdd.value = ""
}
function next() {
	document.querySelectorAll(".selected").forEach(item => {
	  listText1.removeChild(item);
	  listText2.appendChild(item);
	});
  }
  function previous() {
	document.querySelectorAll(".selected").forEach(item => {
	  listText2.removeChild(item);
	  listText1.appendChild(item);
	});
  }
  function nextnext() {
	document.querySelectorAll(".selected").forEach(item => {
	  listText2.removeChild(item);
	  listText3.appendChild(item);
	});
  }
  function previouspre() {
	document.querySelectorAll(".selected").forEach(item => {
	  listText3.removeChild(item);
	  listText2.appendChild(item);
	});
  }