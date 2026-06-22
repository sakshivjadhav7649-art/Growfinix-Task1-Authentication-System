# Secure Authentication System

## Project Description

A secure user authentication system built using Node.js, Express.js, PostgreSQL, JWT, and bcrypt.

## Features

- User Registration
- User Login
- Password Hashing using bcrypt
- JWT Token Authentication
- Protected Routes
- PostgreSQL Database Integration

## Technologies Used

- Node.js
- Express.js
- PostgreSQL
- JWT
- bcryptjs

## API Endpoints

### Register User

POST /api/auth/register

Request:

```json
{
  "name": "Sakshi Jadhav",
  "email": "sakshivjadhav7649@gmail.com",
  "password": "123456"
}
```

### Login User

POST /api/auth/login

Request:

```json
{
  "email": "sakshivjadhav7649@gmail.com",
  "password": "123456"
}
```

### Protected Route

GET /api/auth/profile

Authorization Header:

Bearer <JWT_TOKEN>

## Installation

```bash
npm install
node server.js
```

## Author

Sakshi Jadhav