FROM node:16.14.0-alpine as build-stage

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

# Stage 1, Serve using Nginx
FROM nginx:stable

# Copy the nginx configuration file. This sets up the behavior of nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Finally, all static assets.
COPY --from=build-stage /app/build/ /usr/share/nginx/html

