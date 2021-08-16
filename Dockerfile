FROM node:14-slim as build

WORKDIR /usr/src/app

# dependencies
COPY package*.json ./

RUN npm install

# copy project
COPY . .

RUN npm run build


FROM nginx

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /usr/src/app/docs/.vuepress/dist /usr/share/nginx/html