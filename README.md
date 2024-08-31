# Library Management API

This project is a RESTful API developed to support a library management system. The API provides basic CRUD (Create, Read, Update, Delete) functionality for managing users and book borrowing operations.

## Features

*   **User Management:**
    *   List users
    *   Create a new user
    *   Get a specific user by ID
*   **Book Management:**
    *   List books
    *   Create a new book
    *   Get a specific book by ID
    *   Update a book
    *   Delete a book
*   **Borrowing and Returning:**
    *   Borrow a book
    *   Return a book and provide a rating

## Technologies

*   **Node.js** and **Express.js**: Used for API development.
*   **PostgreSQL**: Used for database management.
*   **Sequelize**: Used as an ORM.
*   **Joi**: Used for validating API requests.
*   **Mocha** and **Chai**: Used as testing frameworks.

## Setup

1.  Clone the repository:
    
    ```
    git clone https://github.com/kenancn/library-management.git
    cd library-management
    ```
    
2.  Install the required packages:
    
    ```
    npm install
    ```
    
3.  Create your PostgreSQL database and run the `schema.sql` file:
    
    ```
    psql -U username -d library_management -f schema.sql
    ```
    
4.  Configure environment variables in the `.env` file.
5.  Start the server:
    
    ```
    npm start
    ```
    
6.  Run the tests:
    
    ```
    npm test
    ```
    

## DDL Script

The provided `schema.sql` file creates the necessary tables for the PostgreSQL database.

## API Endpoints

*   **Users:**
    *   `GET /users` - List all users
    *   `POST /users` - Create a new user
    *   `GET /users/:id` - Get a specific user
*   **Books:**
    *   `GET /books` - List all books
    *   `POST /books` - Create a new book
    *   `GET /books/:id` - Get a specific book
    *   `PUT /books/:id` - Update a book
    *   `DELETE /books/:id` - Delete a book
*   **Borrowing and Returning:**
    *   `POST /users/:userId/borrow/:bookId` - Borrow a book
    *   `POST /users/:userId/return/:bookId` - Return a book and provide a rating

## Contribution

Feel free to open a pull request to contribute. For bug reports and suggestions, please open an issue.
