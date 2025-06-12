FROM node:20-alpine AS build
ENV NODE_ENV production
USER node
WORKDIR /app

COPY --chown=node:node .yarn .yarn
COPY --chown=node:node package.json yarn.lock .yarnrc.yml ./
COPY --chown=node:node packages/biocad-test-web/package.json packages/biocad-test-web/
RUN yarn workspaces focus biocad-test-web --production

COPY --chown=node:node packages/biocad-test-web packages/biocad-test-web
RUN yarn workspace biocad-test-web build

FROM nginxinc/nginx-unprivileged:1.24.0 AS runtime
USER nginx

COPY --chown=nginx:nginx packages/biocad-test-web/nginx.conf /etc/nginx/conf.d/default.conf
COPY --chown=nginx:nginx --from=build /app/packages/biocad-test-web/dist /usr/share/nginx/html

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
