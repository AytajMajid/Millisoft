const paginationDiv = document.querySelector(".paginationPages");
const paginationItemsDiv = document.querySelector(".items");
const paginationControlBtns = document.querySelectorAll(".paginationControl");
const pageItems = [];
let numberOfItemsPerPage = 10;
let activePage = 1;
function createItems(amount) {
	for (let i = 1; i <= amount; i++) {
		pageItems.push("Item " + i);
	}
}
function fetchData(page) {
	paginationItemsDiv.innerHTML = "";
	const start = page * numberOfItemsPerPage - numberOfItemsPerPage;
	const end = page * numberOfItemsPerPage;
	for (let i = start; i < end; i++) {
		const newItem = document.createElement("li");
		newItem.innerText = pageItems[i];
		paginationItemsDiv.appendChild(newItem);
	}
}
function createPages() {
	paginationDiv.innerHTML = "";
	for (let i = 1; i <= pageItems.length / numberOfItemsPerPage; i++) {
		const paginationBtn = document.createElement("button");
		paginationBtn.innerText = JSON.stringify(i);
		i === 1 && paginationBtn.classList.add("active");
		paginationDiv.appendChild(paginationBtn);
		paginationBtn.addEventListener("click", function () {
			activePage = +this.innerText;
			removeActiveClasses(
				document.querySelectorAll(".paginationPages button")
			);
			this.classList.add("active");
			disableBtns();
			fetchData(i);
		});
	}
}
function disableBtns() {
	let previousBtn = paginationControlBtns[0];
	let nextBtn = paginationControlBtns[1];
	previousBtn.disabled = false;
	nextBtn.disabled = false;
	if (activePage === 1) {
		previousBtn.disabled = true;
	}
	if (activePage === pageItems.length / numberOfItemsPerPage) {
		nextBtn.disabled = true;
	}
}
paginationControlBtns.forEach((btn) => {
	btn.addEventListener("click", function () {
		let pages = document.querySelectorAll(".paginationPages button");
		removeActiveClasses(pages);
		if (this.id === "previousPage" && activePage > 1) {
			activePage--;
		}
		if (
			this.id === "nextPage" &&
			activePage < pageItems.length / numberOfItemsPerPage
		) {
			activePage++;
		}
		pages[activePage - 1].classList.add("active");
		disableBtns();
		fetchData(activePage);
	});
});
createItems(50);
createPages();
disableBtns();
fetchData(activePage);