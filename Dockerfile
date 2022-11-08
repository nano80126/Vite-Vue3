FROM node:18-alpine

WORKDIR /home/node/app

COPY package*.json ./

CMD [ "yarn", "install" ]