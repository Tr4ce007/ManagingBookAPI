# Restful API using Node.js for managing books
This is an API for managing books. 
The API supports CRUD (Create, Read, Update, Delete) operations, allowing users to perform the following actions:

- **Adding Books** : Users can add new books to the database. Each book entry requires specific details such as the title, author, publication  and ISBN number.

- **Viewing Books** : Users can view the details of all books in the database or retrieve information on a specific book using its id.

- **Updating Books** : Users can update the details of an existing book. This could involve changing the title, author name, or any other information associated with the book using its id.

- **Deleting Books** : Users can remove books from the database using their id.

## Installation Guide
- **Cloning the repo** : Clone the project in your directory. <br>
    `git clone https://github.com/Tr4ce007/ManagingBookAPI.git`
- **Change into root directory** : Change the directory  <br>
    `cd ManagingBookAPI`
- **Customisation** : Create a .env file and enter mongodb string to connect to the database.<br> `CONNECTION_URL=mongodb://localhost:27017`
- **Run the Project** : <br>
    `npm i && node index.js`


## API Endpoints 
Following are the API Endpoints to target the API provided by it - <br>
| **HTTP Verbs**        | **Endpoints**     | **Action** |  <br>
| **GET**               | `/books`          | To Get list of all books in the database. |   <br>
| **GET**               | `/books/:id`      | To Get specific book using their id. |    <br>
| **POST**              | `/books`          | To Create a new book put title, author, publisher and isbn in body |  <br>
| **PATCH**             | `/books/:id`      | To Update a book put title, author, publisher and isbn in body |  <br>
| **DELETE**            | `/books/:id`      | To Delete specific book using id.  |   <br>

## Deploy
- Deployed on render @ [Book Managing API](https://bookmanagerapi.onrender.com/)
-  Getting list of all Books in database  https://bookmanagerapi.onrender.com/books)
-  Getting specific Book from database https://bookmanagerapi.onrender.com/books/653f7061dcde5eafde55440d
-  To add new book send a post request to `https://bookmanagerapi.onrender.com/books` with data in its body in JSON format.
<br>Dummy Example - <br> `{
    "title":"R D Sharma Mathematics for Class 11",
    "author":"R.D. Sharma",
    "isbn" : "9394417109",
    "publisher" : "Dhanpat Rai Publications"
}`
<br> **NOTE** - ISBN MUST BE UNIQUE.
<br> **NOTE** - The Render some time need time to restart if left inactive please wait for few minutes.
