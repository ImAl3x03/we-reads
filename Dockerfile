FROM node:16.17.1 AS build

WORKDIR /app

COPY . .

RUN yarn install --frozen-lockfile

RUN yarn build

FROM nginx:1.24.0

RUN rm -rf /usr/share/nginx/html/*

COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80 3000

CMD ["nginx", "-g", "daemon off;"]
