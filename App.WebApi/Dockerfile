# syntax=docker/dockerfile:1
FROM node:12-alpine
RUN apk add --no-cache python2 g++ make
WORKDIR /app
COPY . .
COPY package*.json ./

CMD ["npm", "start"]
EXPOSE 7000