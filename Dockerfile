FROM node:23

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project
COPY . .

# Expose the port your app runs on
EXPOSE 4000

# Use nodemon for development with ts-node
CMD ["npm", "run", "dev"]
