# Beertasting app

A BeerTasting app for home use. Also a chance to try out Quarkus and React 

# Instructions for running
The application has some initial data in dev mode.
This data is not available when packaging and running with the frontend,
so you have to add the cars yourself. The DB will be empty.
## Running the backend in dev mode

You can run the backend in dev mode that enables live coding using:
```shell script
./mvnw compile quarkus:dev
```
The backend runs on http://localhost:8080

## Running the frontend in dev mode

You can run the frontend by running:
```shell script
npm start
```
from the src/main/webapp folder
The frontend run on http://localhost:3000

## Packaging and running application with frontend

The application can be packaged using:
```shell script
./mvnw clean package
```
It produces the `tha-1.0.0-SNAPSHOT-runner.jar` file in the `/target` directory.

The application is now runnable using:
```shell script
java -jar target/tha-1.0.0-SNAPSHOT-runner.jar
```

## OpenAPI
The application generates a OpenAPI schema when running.

### Swagger UI
http://localhost:8080/swagger-ui

### OpenAPI Schema
http://localhost:8080/openapi
