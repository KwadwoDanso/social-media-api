# Social Media API

Lab 1: Connecting a Database.

## Objective
- Setting up a production-ready database on MongoDB Atlas and creating a simple Node.js/Express application that can successfully connect to it. 

## What is used
- Node.js
- Express
- MongoDB Atlas
- dotenv

## Setup
1. Clone the repo
2. `npm install`
3. Create `.env` at project root (see `.env.example`)
4. `node server.js`
5. Open `http://localhost:3001/`

## Expected Response
```json
{ "message": "Successfully connected to the database!" }
```

## Security
`.env` is git-ignored. Never commit credentials. See `.env.example`.

## Reflection
**1. Why whitelist IPs in production?**
`0.0.0.0/0` allows any IP to attempt connecting. Production should restrict to trusted IPs only.

**2. What does dotenv do?**
Loads `.env` file variables into `process.env` so secrets stay out of source code.

**3. Debug steps if connection fails?**
Check connection string, DB username, password (no special chars), Atlas Network Access, `.env` location, and that the cluster is active.

## Author
Kwadwo Danso

## Acknowledgements
- Per Scholas Mongo Module