#############
# with node
#############

# FROM node:6.9.1

# RUN mkdir -p /usr/src/app
# WORKDIR /usr/src/app

# COPY . /usr/src/app
# RUN npm install

# RUN npm run build

# EXPOSE 4200

# CMD ["node", "server.js"]



#############
# with nginx
#############

#alpine image
FROM nginx:alpine

#create the server and location configuration
COPY default.conf /etc/nginx/conf.d/default.conf
#copies the build app to the default location
COPY dist /usr/share/nginx/html