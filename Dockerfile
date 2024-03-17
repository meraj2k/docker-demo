FROM node

ENV MONGO_INITDB_ROOT_USERNAME=admin
ENV MONGO_INITDB_ROOT_PASSWORD=password 

RUN mkdir -p /home/app
WORKDIR /home/app

COPY . /home/app

RUN npm install

CMD ["npm", "run", "dev" ]
