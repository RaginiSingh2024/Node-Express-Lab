# Transaction Management System (TMS)

## Description

A backend project for managing financial transactions built with Node.js, Express, and MongoDB. It provides CRUD operations for transactions and analytics endpoints using MongoDB aggregation pipelines.

## Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- dotenv
- cors
- express.json()

## Features

- Transaction CRUD API
- Validation and error handling
- Analytics endpoints for summary, accounts net flow, locations, and tags
- Pagination and sorting support

## Folder Structure

```
/config
/models
/routes
/controllers
/services
/middleware
/utils
server.js
.env.example
README.md
```

## Setup and Run

1. Clone the repository

2. Install dependencies

```bash
npm install
```

3. Create a `.env` file based on `.env.example` and set your MongoDB URI

4. Run the server

```bash
npm start
```

The server will run on the port specified in `.env` (default 5000).

## API Endpoints

### Transactions

- POST `/transactions` - Create a new transaction
- GET `/transactions` - Get all transactions with optional filters, pagination, and sorting
- GET `/transactions/:id` - Get a single transaction by ID
- PUT `/transactions/:id` - Update a transaction
- DELETE `/transactions/:id` - Delete a transaction

### Analytics

- GET `/analytics/summary` - Get total credits, debits, pending, and failed
- GET `/analytics/accounts` - Get net flow per account
- GET `/analytics/locations` - Get totals grouped by city/country
- GET `/analytics/tags` - Get totals grouped by tags

## Notes

- Use proper HTTP status codes
- Use async/await and try/catch for async operations
- Validation is done using `express-validator`

## Stretch Goals (Not Implemented)

- JWT Authentication
- Swagger API Docs

---

Feel free to contribute or raise issues.
