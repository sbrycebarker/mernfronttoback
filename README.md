# mernfronttoback
Social Network built with MERN Stack (MongoDB, Express, React, Node.js)

## Setup

### 1. Install Dependencies

```bash
npm install
cd client && npm install
```

### 2. Configure Environment Variables

**Backend Configuration:**
- Copy `config/default.json.example` to `config/default.json`
- Update with your MongoDB connection string and secrets

**Frontend Configuration:**
- Copy `client/.env.example` to `client/.env`
- Adjust port if needed (default: 3002)

### 3. Run the Application

**Development mode (runs both client and server):**
```bash
npm run dev
```

**Server only:**
```bash
npm run server
```

**Client only:**
```bash
npm run client
```

### Default Ports
- Frontend: http://localhost:3002
- Backend API: http://localhost:5003

## Tech Stack
- MongoDB Atlas
- Express.js
- React
- Node.js
- Redux for state management
- JWT authentication
