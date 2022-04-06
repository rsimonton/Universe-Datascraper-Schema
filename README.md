# Universe-Datascraper-Schema

There are 2 flows that need to be done in order to update the schema:
- Update the schema in this repo and make all pods to download the updated schema.
- Run the migration to apply the changes to the DB.

"dev" branch is used for the dev environment.
"main" brnch is for alpha and prod.

## Steps to update the schema
- add or update schema files in this repo
- Manually create migration files for every updated schema file by running `npm run migrate-mongo create <FileName>` (file name starts with a Capital e.g. `npm run migrate-mongo create NftTokenOwner`)
- Type migration logic for "up" and "down" migration. Yes, we do it manually, there's no autogeneration :(
- run `npm run build`
- commit all code changes including newly generated `dist`
- run `npm version patch` to increase package version


- go to your project where you want to use the new schema
- run `npm update datascraper-schema` to download the latest version

## Explanation
The migration files will be executed in the github build action and thus apply the changes to the DB.

This repo is being sources as a remote repo by all datascraper microservices and they need to run `npm update datascraper-schema` in order to download the new schema.
