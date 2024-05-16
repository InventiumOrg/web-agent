FROM node:latest

ARG SERVICE_NAME=default

RUN mkdir /${SERVICE_NAME}

WORKDIR ${SERVICE_NAME}

COPY src .

COPY package.json .

COPY tsconfig.json .

COPY tsconfig.node.json .

COPY .eslintrc.cjs .

RUN npm install

CMD ["npm, start"]