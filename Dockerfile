FROM node:current-alpine
COPY . ./
RUN npm install && npm run build

FROM nginx:alpine
COPY --from=0 static/dist /usr/share/nginx/html
