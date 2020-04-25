FROM node:13

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn

COPY . .

EXPOSE 8000

CMD ["yarn", "run", "dev"]