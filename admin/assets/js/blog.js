var form = `
    <form>
        <div>
            <label class="form__label">Title</label>
            <input type="text" id="title" required>
        </div>
        <div>
            <label class="form__label">Category</label>
            <input type="text" id="category" required>
        </div>
        <div>
            <label class="form__label">Author</label>
            <input type="text" id="author" required>
        </div>
        <div>
            <label class="form__label">Image</label>
            <input type="url" id="image" required>
        </div>
        <div>
            <label class="form__label">Description</label>
            <textarea id="description" rows="5" required></textarea>
        </div>
        <div  class="form-action-buttons">
            <input type="submit" value="Submit" class="c__button" onclick="save()">
        </div>
    </form>
`;

function table() {
    let table = `
        <table id="employeeList">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Author</th>
                    <th>Image</th>
                    <th>Description</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>`
                for (let i = 0; i < details.length; i++) {
                    table = table + `
                    <tr>
                        <td>${details[i].title}</td>
                        <td>${details[i].category}</td>
                        <td>${details[i].author}</td>
                        <td><img src='${details[i].image}' /></td>
                        <td>${details[i].description.substring(0, 5)+'...'}</td>
                        <td><button type="button" class="status completed" style="border: none" onclick="edit(${i})">Edit</button></td>
                        <td><button type="button" class="status pending" style="border: none" onclick="deleteData(${i})">Delete</button></td>
                    </tr> `;
                };
                table = table+`
            </tbody>
        </table>
    `
    document.getElementById("table").innerHTML = table;
}

document.getElementById("form").innerHTML = form;

details = [];

getData();

table();

function getData(){
    let Data = localStorage.getItem("details");
    if (Data) {
        details = JSON.parse(Data);
    } else {
        setData();
    };
};

function setData() {
    localStorage.setItem("details", JSON.stringify(details));
};

function save() {
    let title = document.getElementById("title");
    let category = document.getElementById("category");
    let author = document.getElementById("author");
    let image = document.getElementById("image");
    let description = document.getElementById("description");

    if (title.value == 0) {
        alert("title is Empty");
        return
    }

    let data = {
        title: title.value,
        category: category.value,
        author: author.value,
        image:  image.value,
        description:  description.value
    };

    details.push(data);

    setData();

    table();
    title.value = "";
    category.value = "";
    author.value = "";
    image.value = "";
    description.value = "";
};

function deleteData(index) {
    details.splice(index, 1);

    setData();

    table();
};

function edit(index) {
    let editForm = `
        <form>
            <div>
                <label class="form__label">Title*</label><label class="validation-error hide" id="titleValidationError">This field is required.</label>
                <input type="text"value="${details[index].title}" id="newTitle" required>
            </div>
            <div>
                <label class="form__label">Category</label>
                <input type="text" value="${details[index].category}" id="newCategory" required>
            </div>
            <div>
                <label class="form__label">Author</label>
                <input type="text" value="${details[index].author}" id="newAuthor" required>
            </div>
            <div>
                <label class="form__label">Image</label>
                <input type="url" value="${details[index].image}" id="newImage" required>
            </div>
            <div>
                <label class="form__label">Description</label>
                <textarea name="description" id="newDescription" rows="5" required>${details[index].description}</textarea>
            </div>
            <div  class="form-action-buttons">
                <input type="submit" value="Submit" class="c__button" onclick="update(${index})">
            </div>
        </form>
    `
    document.getElementById("form").innerHTML = editForm;
};

function update(index) {
    let newTitle = document.getElementById('newTitle');
    let newCategory = document.getElementById('newCategory');
    let newAuthor = document.getElementById('newAuthor');
    let newImage = document.getElementById('newImage');
    let newDescription = document.getElementById('newDescription');

    details[index] = {
        title: newTitle.value,
        category: newCategory.value,
        author: newAuthor.value,
        image: newImage.value,
        description: newDescription.value,
    };

    setData();

    table();

    document.getElementById("form").innerHTML = form;

}