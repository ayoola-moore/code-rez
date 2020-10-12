# Use below nginx version
FROM node:9.4

# set working directory
WORKDIR /usr/src/app

# Copy the build folder of the react app
COPY . /usr/src/app

# Prepare build directory
RUN cd /usr/src/app && npm install

# Expose it on port 80 for production
EXPOSE 8080

# Expose it on port 3000 for development
EXPOSE 3000

CMD ["npm", "start"]