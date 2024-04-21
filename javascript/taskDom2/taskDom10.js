const input = document.querySelector(".input");
const telebeInput = document.querySelector(".telebe input");
const btn = document.querySelector(".telebe button");
const head = document.querySelector(".head");
const results = document.querySelectorAll(".result");
let mark = 0;
let row = [0, 0, 0, 0, 0];

function closeAssessmentTool() {
	document.querySelectorAll(".tool").forEach((tool) => tool.remove());
}

function openAssessmentTool(cell, row) {
	closeAssessmentTool();
	const tool = document.createElement("div");
	tool.classList.add("tool");
	const full = document.createElement("button");
	full.textContent = "tam";
	full.classList.add("green");
	const part = document.createElement("button");
	part.textContent = "natamam";
	part.classList.add("yellow");
	const zero = document.createElement("button");
	zero.textContent = "0";
	zero.classList.add("red");
	tool.appendChild(full);
	tool.appendChild(part);
	tool.appendChild(zero);
	cell.appendChild(tool);

	tool.childNodes.forEach((btn) => {
		btn.addEventListener("click", function () {
			markPerson(row, cell, btn);
		});
	});
}

function createElements(length) {
	mark = 10 / length;
	for (let row = 1; row <= length; row++) {
		const th = document.createElement("th");
		th.innerText = `Is No${row}`;
		head.before(th);
		results.forEach((targetBodyCell, i) => {
			const td = document.createElement("td");
			const button = document.createElement("button");
			button.innerText = `d/e`;
			button.classList.add("black");
			td.appendChild(button);
			targetBodyCell.before(td);

			button.addEventListener("click", () => {
				openAssessmentTool(td, i + 1);
			});
		});
	}
}

function markPerson(row, cell, btn) {
	cell.children[0].textContent = btn.textContent;
	cell.children[0].classList.remove(cell.children[0].classList.value);
	cell.children[0].classList.add(btn.classList.value);

	if (btn.className.includes("green")) {
		row[row] += mark;
	} else if (btn.className.includes("yellow")) {
		row[row] += mark / 2;
	} else {
		row[row] += 0;
	}

	results[row - 1].textContent = row[row].toFixed(2);
	cell.children[0].disabled = true;
	closeAssessmentTool();
}

btn.addEventListener("click", () => {
	createElements(+telebeInput.value);
	input.remove();
});
