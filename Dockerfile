FROM node:latest
WORKDIR /app

COPY package.json .

RUN npm instal

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]