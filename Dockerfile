FROM node:boron

RUN npm install webpack -g

# Create directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Gather dependencies

COPY package.json /usr/src/app
RUN npm install

# Bundle app source

COPY . /usr/src/app
RUN npm run build

# Map app to Docker daemon

EXPOSE 8888
ENTRYPOINT [ 'npm' ]
CMD [ 'restart' ]
