# Use the official Node.js image as a base image with the desired version
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of the application source code to the container
COPY . .

# Expose the port your application listens on (e.g., 3000)
EXPOSE 3000

# Command to start your Node.js application
CMD ["node", "app.js"]
