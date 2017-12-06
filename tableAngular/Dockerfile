FROM node:6.9.1

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . /usr/src/app
RUN npm install

RUN npm run build

EXPOSE 4200

CMD ["node", "server.js"]