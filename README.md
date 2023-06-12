## Description

This repo provides wrapper API for [Hedera's mirror node REST API](https://docs.hedera.com/hedera/sdks-and-apis/rest-api)

Status

- [x] Query account balances

- [x] Query list of transactions

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Running with Docker

```bash
docker build -t hederaexplorer .

docker run -dt -p3000:3000 hederaexplorer
```

## Swagger docs

[http://localhost:3000/api](http://localhost:3000/api)