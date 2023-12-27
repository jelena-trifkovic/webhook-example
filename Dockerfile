FROM node:20

RUN npm install -g yarn

WORKDIR /usr/src/app

COPY package.json yarn.lock tsconfig.json ./

RUN yarn

COPY . .

RUN yarn build

EXPOSE 3000

CMD ["node", "dist/index.js"]
