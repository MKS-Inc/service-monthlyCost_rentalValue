FROM node:latest

RUN mkdir -p /src/app

WORKDIR /src/app

COPY package*.json ./

RUN npm install

# RUN npm install -g nodemon
RUN apt-get update && apt-get install -y vim

COPY . .

EXPOSE 3006

# RUN npm run build:react

CMD ["npm", "start"]

# CMD npm run start & npm run build:react