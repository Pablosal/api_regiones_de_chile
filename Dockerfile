FROM node

WORKDIR /app

COPY package*.json .
COPY prisma ./prisma

RUN npm install

COPY . .

EXPOSE 5000

CMD [ "npm","run","docker:start" ]