FROM node:alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --only=prod

COPY . .

ENV PORT=4000

EXPOSE 4000

CMD ["npm", "start"]