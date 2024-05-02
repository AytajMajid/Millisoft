btn.addEventListener('click', function () {
    modal.style.display = "block"
    xmark.addEventListener('click', function () {
        modal.style.display = "none"
    })
})
let counter = 1;
but.addEventListener("click", function () {
    modal.style.display = "none";
    let name = document.getElementsByClassName("inp1")[0].value;
    let surname = document.getElementsByClassName("inp2")[0].value;
    let age = document.getElementsByClassName("inp3")[0].value;
    var tr = document.createElement("tr");
    var tdNumber = document.createElement('td');
    tdNumber.textContent = counter;
    tr.appendChild(tdNumber);
    var tdName = document.createElement('td');
    tdName.textContent = name;
    tr.appendChild(tdName);
    var tdSurname = document.createElement('td');
    tdSurname.textContent = surname;
    tr.appendChild(tdSurname);
    var tdAge = document.createElement('td');
    tdAge.textContent = age;
    tr.appendChild(tdAge);
    var tdDelete = document.createElement('td');
    var deleteIcon = document.createElement('i');
    deleteIcon.className = 'far fa-trash-alt delete-icon';
    tdDelete.appendChild(deleteIcon);
    tr.appendChild(tdDelete);
    var tdEdit = document.createElement('td');
    var editIcon = document.createElement('i');
    editIcon.className = 'far fa-edit edit-icon';
    tdEdit.appendChild(editIcon);
    tr.appendChild(tdEdit);
    var tbody = document.getElementById("tableBody");
    tbody.appendChild(tr);
    counter++;
    renNumberRows();
    document.querySelector("#modalMain .inp1").value = "";
    document.querySelector("#modalMain .inp2").value = "";
    document.querySelector("#modalMain .inp3").value = "";
});
function renNumberRows() {
    var rows = document.querySelectorAll('#tableBody tr');
    rows.forEach((row, index) => {
        row.cells[0].textContent = index + 1;
    });
}
document.getElementById("tableBody").addEventListener("click", function(e) {
    if (e.target.matches(".delete-icon")) {
        e.target.closest("tr").remove();
        renNumberRows();
    } else if (e.target.matches(".edit-icon")) {
    }
});
document.getElementById("tableBody").addEventListener("click", function(e) {
    if (e.target.matches(".edit-icon")) {
        var selectedRow = e.target.closest("tr");
        var rowData = [];
        for (var i = 1; i < selectedRow.cells.length - 2; i++) {
            rowData.push(selectedRow.cells[i].textContent);
        }
        var inputs = document.querySelectorAll("#modalMain input[type='text']");
        for (var i = 0; i < rowData.length; i++) {
            inputs[i].value = rowData[i];
        }
        modal.style.display = "block";
        document.getElementById("but").addEventListener("click", function() {
            var newName = document.querySelector("#modalMain .inp1").value;
            var newSurname = document.querySelector("#modalMain .inp2").value;
            var newAge = document.querySelector("#modalMain .inp3").value;
            var tr = document.createElement("tr");
            var tdName = document.createElement('td');
            tdName.textContent = newName;
            tr.appendChild(tdName);
            var tdSurname = document.createElement('td');
            tdSurname.textContent = newSurname;
            tr.appendChild(tdSurname);
            var tdAge = document.createElement('td');
            tdAge.textContent = newAge;
            tr.appendChild(tdAge);
            var tdDelete = document.createElement('td');
            var deleteIcon = document.createElement('i');
            deleteIcon.className = 'far fa-trash-alt delete-icon';
            tdDelete.appendChild(deleteIcon);
            tr.appendChild(tdDelete);
            var tdEdit = document.createElement('td');
            var editIcon = document.createElement('i');
            editIcon.className = 'far fa-edit edit-icon';
            tdEdit.appendChild(editIcon);
            tr.appendChild(tdEdit);
            modal.style.display = "none";
        });
    }
});

document.getElementById("tableBody").addEventListener("click", function(e) {
    if (e.target.matches(".delete-icon")) {
        e.target.closest("tr").remove(); 
    }
});
document.getElementById("tableBody").addEventListener("click", function(e) {
    if (e.target.matches(".edit-icon")) {
        e.target.closest("tr").remove(); 
    }
});