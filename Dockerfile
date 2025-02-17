# Use an official Node.js runtime as a base image
FROM node:22-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json first (for caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project
COPY . .

# Install nodemon globally for live reload
RUN npm install -g nodemon

# Expose the port your app runs on
EXPOSE 3000

# Start the app in development mode
CMD ["npm", "run", "dev"]
