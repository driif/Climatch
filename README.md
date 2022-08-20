## Description

Das Ziel von Climatch ist es, eine einfache Kooperation und Zusammenarbeit zwischen den Leuten zu ermöglichen, die zusammen gegen Klima- und Umweltkrise kämpfen.

## Backend 
wird auf dem Port 3000 laufen
db Postgresql wird auf dem Port 5434 laufen

```bash
$ npm install
$ npm run db:dev:up
$ npm run prisma:dev:deploy
$ npm run start
```

## Frontend
wird auf dem Port 4200 laufen

```bash
$ cd frontend
$ npm install
$ npm run start
```
http://localhost:4200  (Angular)

## Production Mode

```bash
# Build (Frontend and Backend)
$ npm run build

# Start Dockercontainer with Postgresql and Prisma
$ npm run db:dev:up
$ npm run prisma:dev:deploy

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Climatch is an MIT-licensed open source project. We are not profitable. We are a community of people who are passionate about climate change and want to help each other.

## Stay in touch

- Idee & Organisation - [Dominic Memmel]()
- CTO & Software Developer - [Andrii Fedorchuk](andrii.fedorch@gmail.com)
- Head of Design - [Kirsti Maula]()

- Website - [Climatch](https://climatch.herokuapp.com)

## License

Climatch is [MIT licensed](LICENSE).
