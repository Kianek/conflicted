FROM node:15

WORKDIR /app

COPY package*.json .

RUN yarn install

COPY . .

EXPOSE 5001

CMD ["node", "index.js"]