# Use below nginx version
FROM node:9.4

# set working directory
WORKDIR /usr/src/app

# install and cache app dependencies
COPY package*.json ./
ADD package.json /usr/src/app/package.json

# Prepare build directory
RUN npm install

# Copy the build folder of the react app
COPY . .

# Expose it on port 80
EXPOSE 8080

CMD ["npm", "start"]