# Use a base image with Node.js
FROM node:18-alpine

# Define a working directory inside the container
RUN mkdir -p /usr/src/app/app
WORKDIR /usr/src/app/app
# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the default port of Vite
EXPOSE 5173

# Start the development server
CMD ["npm", "run", "dev","--host"]