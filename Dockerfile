# 1. Set up
FROM node:14.15.0-buster

# 2. Install dependencies
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn

# 3. Copy source code
COPY . .

# 4. Start deploying server
EXPOSE 8000
CMD ["yarn", "dev"]
