# Stage 1
FROM node:15 AS base

WORKDIR /app

COPY package*.json .

# Install dependencies
RUN yarn install

# Copy dependencies
COPY . .

# Execute Babel
RUN yarn build

# Stage 2
FROM base AS release
WORKDIR /app

# Copy only the built files
COPY --from=base /app/node_modules .
COPY --from=base /app/lib ./lib

EXPOSE 5001

CMD ["node", "lib"]