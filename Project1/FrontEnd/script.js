const API_URL = "http://localhost:8080/users";

// Load users on page load
window.onload = fetchUsers;

// FETCH USERS
function fetchUsers() {
    fetch(API_URL)
        .then(res => res.json())
        .then(data => {
            let table = document.getElementById("userTable");
            table.innerHTML = "";

            data.forEach(user => {
                table.innerHTML += `
                    <tr>
                        <td>${user.id}</td>
                        <td>${user.name}</td>
                        <td>${user.email}</td>
                        <td>
                            <button class="edit" onclick="editUser(${user.id}, '${user.name}', '${user.email}')">Edit</button>
                            <button class="delete" onclick="deleteUser(${user.id})">Delete</button>
                        </td>
                    </tr>
                `;
            });
        });
}

// CREATE USER
function saveUser() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email })
    })
    .then(() => {
        fetchUsers();
        clearForm();
    });
}

// EDIT USER (fill form)
function editUser(id, name, email) {
    document.getElementById("userId").value = id;
    document.getElementById("name").value = name;
    document.getElementById("email").value = email;
}

// UPDATE USER
function updateUser() {
    let id = document.getElementById("userId").value;
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email })
    })
    .then(() => {
        fetchUsers();
        clearForm();
    });
}

// DELETE USER
function deleteUser(id) {
    fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    })
    .then(() => fetchUsers());
}

// CLEAR FORM
function clearForm() {
    document.getElementById("userId").value = "";
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
}