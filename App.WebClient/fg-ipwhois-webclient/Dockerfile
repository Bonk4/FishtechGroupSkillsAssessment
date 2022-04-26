# syntax=docker/dockerfile:1
FROM node:alpine
RUN apk add --no-cache python2 g++ make
WORKDIR /app

COPY . ./
COPY package*.json ./

RUN npm install
CMD ["npm", "run", "start"]
EXPOSE 3000
EXPOSE 8888