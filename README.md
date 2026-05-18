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

Was having error  PS C:\Users\...\...\mongoDB\social-media-api> node server.js
◇ injected env (2) from .env // tip: ⌘ custom filepath { path: '/custom/path/.env' }
Server running on: http://localhost:3001
MongoDB connection error:  Error: querySrv ECONNREFUSED _mongodb._tcp.cluster0.quq16pe.mongodb.net
    at QueryReqWrap.onresolve [as oncomplete] (node:internal/dns/promises:294:17) {
  errno: undefined,
  code: 'ECONNREFUSED',
  syscall: 'querySrv',
  hostname: '_mongodb._tcp.cluster0.quq16pe.mongodb.net'
} 
I resolved this with fallback to the Standard (Non-SRV) Connection String
The most reliable bypass is to stop using the mongodb+srv:// protocol entirely.

Go to your MongoDB Atlas Dashboard.
Click Connect > Drivers.
Look for a toggle or dropdown to select an older driver version (e.g., Node.js 3.6 or later).
Copy the connection string. It will start with mongodb:// instead of mongodb+srv:// and will explicitly list three separate shard addresses.

## Author
Kwadwo Danso

## Acknowledgements
- Per Scholas Mongo Module