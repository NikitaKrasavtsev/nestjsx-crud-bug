FROM node:12.14.1
WORKDIR /app
COPY ./package.json ./package-lock.json ./
RUN npm install
COPY . .
CMD ["npm", "run", "test:e2e"]
