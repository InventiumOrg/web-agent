FROM node:latest

ARG SERVICE_NAME=default

ARG FOLDER_NAME=default

RUN mkdir /${SERVICE_NAME}

WORKDIR ${SERVICE_NAME}

COPY ${FOLDER_NAME}/. /${SERVICE_NAME}

RUN npm install

CMD ["npm, start"]