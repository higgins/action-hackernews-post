# Container image that runs your code
FROM alpine:3.10

apk add --update nodejs npm
RUN npm install
CMD ["node", "index.js"]