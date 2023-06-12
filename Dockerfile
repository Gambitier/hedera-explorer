

###################
# BUILD FOR LOCAL DEVELOPMENT
###################

FROM node:18.16.0-alpine As development

# Create app directory
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure copying both package.json AND package-lock.json (when available).
# Copying this first prevents re-running yarn install on every code change.
COPY --chown=node:node package*.json ./

RUN yarn install

# Bundle app source
COPY --chown=node:node . .

# Use the node user from the image (instead of the root user)
USER node

###################
# BUILD FOR PRODUCTION
###################

FROM node:18.16.0-alpine As build

WORKDIR /usr/src/app

COPY --chown=node:node package*.json ./

# In order to run `yarn run build` we need access to the Nest CLI which is a dev dependency. In the previous development stage we ran `yarn install` which installed all dependencies, so we can copy over the node_modules directory from the development image
COPY --chown=node:node --from=development /usr/src/app/node_modules ./node_modules

COPY --chown=node:node . .

# Run the build command which creates the production bundle
RUN yarn run build

# Set NODE_ENV environment variable
ENV NODE_ENV production

RUN yarn install --production && yarn cache clean --force

USER node

###################
# PRODUCTION
###################

FROM node:18.16.0-alpine As production

# Copy the bundled code from the build stage to the production image
COPY --chown=node:node --from=build /usr/src/app/node_modules ./node_modules
COPY --chown=node:node --from=build /usr/src/app/dist ./dist

# Start the server using the production build
CMD [ "node", "dist/main.js" ]
