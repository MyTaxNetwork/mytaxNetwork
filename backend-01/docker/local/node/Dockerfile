FROM node:16.20.2
WORKDIR /app/frontend
COPY ./frontend/package.json /app/frontend/
COPY ./frontend/package-lock.json /app/frontend/
# COPY ./frontend/.storybook/main.js /app/frontend/
# COPY .././frontend/.storybook/preview.js /app/frontend/

ENV PATH ./node_moules/bin/:$PATH

RUN npm install --global npm@7.24.0
RUN npm rebuild node-sass
RUN npm install
