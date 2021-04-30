FROM node:current-alpine
COPY package*.json ./
RUN npm install
COPY . ./
RUN npm run build

FROM nginx:alpine
COPY --from=0 dist /usr/share/nginx/html
