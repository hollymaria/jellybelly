# Specify a base image

FROM node:10-alpine

WORKDIR /usr/app
# Install some dependencies

COPY ./ ./
RUN npm install

# Default command

CMD ["npm", "start"]