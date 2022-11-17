FROM node:17-alpine

WORKDIR /moose-app-frontend

COPY package.json .

RUN npm install

COPY . .

EXPOSE 8080

CMD ["node", "server.js"]
