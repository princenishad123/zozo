FROM node:lts

WORKDIR /zozo

COPY package*.json ./

RUN npm install

COPY . .

RUN npm install pm2 -g

EXPOSE 8080

CMD ["pm2-runtime", "src/app.js"]