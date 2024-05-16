FROM node:latest

ARG SERVICE_NAME=default

ARG FOLDER=default

RUN mkdir /${SERVICE_NAME}

WORKDIR ${SERVICE_NAME}

COPY ${FOLDER}/. /${SERVICE_NAME}

RUN npm install

CMD ["npm, start"]