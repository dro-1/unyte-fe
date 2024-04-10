FROM node:latest

WORKDIR /app

COPY package.json ./

COPY yarn.lock ./

RUN yarn

COPY . .

EXPOSE 8080

CMD ["yarn", "dev"]