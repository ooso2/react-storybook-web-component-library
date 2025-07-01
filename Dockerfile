# Stage 1: Build the app
FROM node:18 AS build

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the source code
COPY . .

# Build the React app
RUN npm run build

# Stage 2: Serve the app
FROM node:18

# Install 'serve' to serve the production build
RUN npm install -g serve

# Set working directory for runtime
WORKDIR /oso_olubunmi2_ui_garden

# Copy built app from previous stage
COPY --from=build /app/build ./build

# Expose port
EXPOSE 8083

# Start the app
CMD ["serve", "-s", "build", "-l", "8083"]
