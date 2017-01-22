FROM node:7.4.0-alpine
RUN npm install -g yarn
WORKDIR /app
CMD yarn start
