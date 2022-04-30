// new function that passes in the data from the user's prompt response to create a new employee cards. This HTML will be used to create the new HTML file
// Bootstrap is used to avoid the created of a CSS file
function contentHTML(data) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
        <script src="https://kit.fontawesome.com/5bac68f234.js" crossorigin="anonymous"></script>
        <title>My Team</title>
    </head>
    <body>
        <header class="jumbotron jumbotron-fluid" style="background-color: #35dccd;">
            <div class="container">
              <div class="row">
                <div class="col-12">
                  <h1 class="text-center" style="color: white;">My Team</h1>
                </div>
              </div>
            </div>
        </header>
    
        <div class="container">
            <div class="row">
                <div class="col-12 d-flex justify-content-center">
                    ${data}
                </div>
            </div>
        </div>
        
    </body>
    </html>`;
}

// export the contentHTML function to be imported elsewhere
module.exports = contentHTML;