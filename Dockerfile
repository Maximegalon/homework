FROM node:18.13.0

RUN mkdir /app

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install -g npm

RUN npm i --legacy-peer-deps

COPY . .

EXPOSE 4200

CMD ["npm", "run", "start"]