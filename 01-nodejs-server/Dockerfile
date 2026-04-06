# Use official Node.js image
FROM node:20

# Create directory of the app
WORKDIR /usr/src/app

# Copy app files into directory
COPY src/index.js ./

# Open PORT for access
EXPOSE 3000

# Specify the command to launch the application
CMD [ "node", "index.js" ]