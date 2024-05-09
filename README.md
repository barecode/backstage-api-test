# backstage-api-test
Cross-linked with https://github.com/barecode/backstage-api-test

All contents hand-edited.... *joy*

Useful OpenAPI online editor: https://editor.swagger.io
openapi: "3.0.0"
info:
  version: 1.0.0
  title: Backstage API Test
servers:
  - url: http://localhost:8000/
    description: Localhost node.js app
paths:
  /hello_world:
    get:
      summary: Responds with Hello World
      responses:
        '200':
          description: |-
            200 response
          content:
            text/plain:
              schema:
                type: string
                example: Hello world
