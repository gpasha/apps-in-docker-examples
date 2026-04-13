FROM node:20
WORKDIR /app
COPY server.js .
COPY package.json .
RUN npm install
# CMD ["npm", "run", "start"]
CMD ["node", "server.js"]