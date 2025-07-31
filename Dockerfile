# Stage 0, build - copy files, install node_modules, build app
FROM node:lts-buster as build
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY ./ /app/
RUN npm run buildall-production

# Stage 1, run application on nginx
FROM nginx:stable-alpine
COPY --from=build /app/configuration/userinterface/components/ /usr/share/nginx/html