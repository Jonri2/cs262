# Web Service Questions

## Is the service RESTful? If not, why not? If so, what key features make it RESTful.
The service is RESTful because it uses HTTP, passes JSON, its objects are directory-structured URLs, and it is stateless.

## What endpoints implement actions that are idempotent? nullipotent?
The endpoints to get, update, and delete celebrities and sightings are idempotent, and the endpoints to create celebrities and sightings are nullipotent.