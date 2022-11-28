
## Auth nestjs

Dockerized app for login/register with nestjs

## Running the app

```bash

$ cp .env.example .env

$ docker compose up --build

$ open http://localhost:4040 # To open adminer and visualize the database

$ open http://localhost:3000 # To start sending some requests 

$ open http://localhost:3000/api/doc # To open swagger 
 
```

## Run e2e tests
```bash
# Make sure no container existed with the same name fudy_api in your docker context

$ docker exec -it fudy_api npm run test:e2e

```

## Requests

import [fudy.postman_collection.json](https://github.com/aa-ahmed-aa/nest-auth-postgres/blob/master/fudy.postman_collection.json) to your postman and start testing the app 
