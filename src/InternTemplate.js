// HTML to create a new intern card with data passed from the user's reponses
function internHTML(data) {
    return `<div class="col my-1">
    <div class="card shadow bg-body rounded">
        <div class="card-header" style="background-color: #35dccd;">
            <h2 style="color: white;">${data.name}</h2>
            <h3><i class="fa-solid fa-user-graduate"></i> Intern</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${data.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${data.email}">${data.email}</a></li>
                <li class="list-group-item">School: ${data.school}</li>
            </ul>
        </div>
    </div>
</div>`;
}

// export the function so it can be imported elsewhere
module.exports = internHTML;