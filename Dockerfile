FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --fetch-timeout=600000

COPY . .

RUN npx prisma generate

EXPOSE 5002

CMD ["npm", "run", "dev"]