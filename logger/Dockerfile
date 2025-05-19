FROM node:18

WORKDIR /app

# הוסף curl
RUN apt-get update && apt-get install -y curl

COPY package*.json ./
RUN npm install

COPY . .

CMD ["node", "logger.js"]
