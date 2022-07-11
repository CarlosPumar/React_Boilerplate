# REACT BOILEPLATE

This boilerplate provides a proficient react structure.

- Linter (airbnb rules) configured with prettier and husky
- Dockerized with development and production stages.
- Jest for testing
- src folder structure:
  - CommonComponents: Reusable components
  - Components: Non reusable components
  - PagesComponents: Entrypoint for pages
  - Tests: Jest testing
  - Utils: Others like constants

## How to run

### Development stage

```shell
docker-compose -f docker-compose.dev.yml up -d --build
```

localhost:3000

### Production stage

```shell
docker-compose -f docker-compose.prod.yml up -d --build
```

localhost
