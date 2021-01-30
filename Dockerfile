FROM node:14.15.4

# Create app directory
WORKDIR /usr/src/app

COPY ./code/package*.json ./

RUN npm ci --only=production

COPY ./code/ .

RUN npm i -g @angular/cli
RUN  cd /usr/src/app/ui && npm install && ng build 

EXPOSE 3000

CMD [ "npm", "start" ]