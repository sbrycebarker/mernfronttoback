# Build stage for React frontend
FROM node:18-alpine AS client-build
WORKDIR /app/client
COPY client/package*.json ./
RUN npm ci
COPY client/ ./
RUN npm run build

# Production stage
FROM node:18-alpine
WORKDIR /app

# Copy backend dependencies
COPY package*.json ./
RUN npm ci --only=production

# Copy backend source
COPY . .

# Copy built frontend from build stage
COPY --from=client-build /app/client/build ./client/build

# Expose port
EXPOSE 3000

# Start the server
CMD ["node", "server.js"]
