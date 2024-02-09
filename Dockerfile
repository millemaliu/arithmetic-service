FROM node:20.11.0-alpine
WORKDIR /src
COPY package*.json ./
RUN npm ci --omit=dev
COPY ./src ./src

CMD npm start
