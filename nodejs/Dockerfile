FROM node:14

WORKDIR /app

COPY ./package.json /app/package.json
COPY ./package-lock.json /app/package-lock.json

RUN yarn install
COPY . .

EXPOSE 8080

ENTRYPOINT [ "./await-for-mysql.sh", "npm", "run", "start" ]