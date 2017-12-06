FROM node:6.9.1

RUN mkdir -p /usr/src/srv
WORKDIR /usr/src/srv

COPY . /usr/src/srv
RUN npm install

EXPOSE 5555

CMD ["npm", "start"]