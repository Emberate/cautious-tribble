# Use a more specific Node.js version instead of 'latest'
FROM node:latest

# Set the working directory to /app
WORKDIR /app

# Copy package.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port that the application will listen on
EXPOSE 5173

# Set the default command to run when the container starts
CMD ["npm", "run", "dev", "--", "--host"]
