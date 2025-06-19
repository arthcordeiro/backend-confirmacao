FROM node:18
WORKDIR /app
COPY . .
RUN npm install
RUN chmod +x ./node_modules/.bin/ts-node
EXPOSE 3001
CMD ["npm", "start"]
