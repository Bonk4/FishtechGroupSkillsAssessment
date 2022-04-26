# syntax=docker/dockerfile:1
FROM node:12-alpine
RUN apk add --no-cache python2 g++ make
WORKDIR /app
COPY . .
COPY package*.json ./
# RUN install -g typescript
# RUN npm install -g ts-node
# RUN npm install -D tslib @types/node
RUN npm install --production
CMD ["npm", "start"]
EXPOSE 7000