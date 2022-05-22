# Pull Docker Hub base image
FROM node:14.16.0-alpine3.10
RUN mkdir -p /usr/src/app

# Set working directory
WORKDIR /usr/src/app
# Install app dependencies
COPY package*.json ./

RUN npm install --save-dev nodemon
RUN npm install -qy
# Copy app to container
COPY . .

ENV PORT 5000
CMD ["npm", "run", "start"]
