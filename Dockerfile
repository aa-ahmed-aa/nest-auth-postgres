FROM node:16.14.2-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install -g @nestjs/cli@8

RUN npm install

COPY . .

RUN npm install -g ts-node

CMD ["sh", "./entrypoint.sh"]
