const assessmentRowElements = document.querySelectorAll(
	".assessment table tbody tr p"
);
const assessmentModal = document.querySelector(".assessmentModal");
const assessmentMarks = document.querySelectorAll(".assessmentModalItems p");
const rowHeadElements = document.querySelectorAll(".rowHeadEl");
const closeAssessmentModalBtn = document.querySelector(".closeAssessment");
let activeAssessmentElement;
function toggleAssessmentModal() {
	assessmentModal.classList.toggle("active");
}
function swapElementValue(targetEl, swapEl) {
	targetEl.innerHTML = swapEl.innerHTML;
	targetEl.classList.remove(targetEl.classList.value);
	targetEl.classList.add(swapEl.classList[0]);
}
closeAssessmentModalBtn.addEventListener("click", toggleAssessmentModal);
assessmentRowElements.forEach((el) => {
	el.addEventListener("click", function () {
		activeAssessmentElement = this;
		toggleAssessmentModal();
	});
});
assessmentMarks.forEach((mark) => {
	mark.addEventListener("click", function () {
		swapElementValue(activeAssessmentElement, this);
		toggleAssessmentModal();
	});
});
rowHeadElements.forEach((el) => {
	el.addEventListener("click", function () {
		const columns = Array.from(this.parentElement.parentElement.children);
		const index =
			this.parentElement && columns.indexOf(this.parentElement) + 3;
		const tableColElements = document.querySelectorAll(
			`.assessment table tbody tr td:nth-child(${index}) p`
		);
		tableColElements.forEach((colEl) => {
			if (colEl.classList.contains("black")) {
				swapElementValue(colEl, this);
			}
		});
	});
});