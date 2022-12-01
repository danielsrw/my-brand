var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["title"] = document.getElementById("title").value;
    formData["category"] = document.getElementById("category").value;
    formData["author"] = document.getElementById("author").value;
    formData["description"] = document.getElementById("description").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.title;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.category;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.author;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.description;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)" class="status completed" style="text-decoration: none">Edit</a>
                       <a onClick="onDelete(this)" class="status pending" style="text-decoration: none">Delete</a>`;
}

function resetForm() {
    document.getElementById("title").value = "";
    document.getElementById("category").value = "";
    document.getElementById("author").value = "";
    document.getElementById("description").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("title").value = selectedRow.cells[0].innerHTML;
    document.getElementById("category").value = selectedRow.cells[1].innerHTML;
    document.getElementById("author").value = selectedRow.cells[2].innerHTML;
    document.getElementById("description").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.title;
    selectedRow.cells[1].innerHTML = formData.category;
    selectedRow.cells[2].innerHTML = formData.author;
    selectedRow.cells[3].innerHTML = formData.description;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("title").value == "") {
        isValid = false;
        document.getElementById("titleValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("titleValidationError").classList.contains("hide"))
            document.getElementById("titleValidationError").classList.add("hide");
    }
    return isValid;
}