FROM node:14-slim

WORKDIR /usr/src/app

# dependencies
COPY package*.json ./

RUN npm install

# copy project
COPY . .

EXPOSE 8000

CMD ["npm", "run", "dev"]