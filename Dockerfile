FROM node:17-alpine

RUN npm install -g nodemon 

WORKDIR /moose-app-frontend

COPY package.json .

RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm", "run", "dev"]
