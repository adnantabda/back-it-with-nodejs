## Schema

the schema is the main method of configuration for prisma.
it have 

- data source 
- generators 
- data model definition 

it is typical a single file with .prisma extension 

Whenever a prisma command is invoked, the CLI typically reads some information from the schema, e.g.:

-  prisma generate: Reads all above mentioned information from the Prisma schema to generate the correct data source client code (e.g. Prisma Client).
- prisma migrate dev: Reads the data sources and data model definition to create a new migration.

Example of prisma code 

```prisma

model User {
  id        Int      @id @default(autoincrement())
  createdAt DateTime @default(now())
  email     String   @unique
  name      String?
}
```