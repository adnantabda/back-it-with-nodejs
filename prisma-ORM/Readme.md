# Object Relational Mappers ( ORM )

ORMs are tools that let us manipulate data in our database.

## PRISMA ORM

is one of the popular node.js orm

## Challenges with raw SQLin

- so much more code
- navigating the codebase 
- altering production data

NOTE 1: DATABASE definition is called SCHEMA
NOTE 2: CHANGING production Database is called 'Migration'
        it might be adding new column or populating it with\
        new table.

## PRISMA

## PRISMA SCHEMA

it is a file where we will define our modules. 
example 

```
model Message {
   id        Int      @id @default(autoincrement())
   content   String   @db.VarChar(255) 
   createdAt DateTime @default(now())
   author    User     @relation(fields: [authorId], references: [id])
   authorId  Int     
}

model User {
   // user's fields
}

```
it goes like this the first column defines the name of the column and the second define datatype and the third one constraints on it.

prisma client

The client is a separate library to interact with Database
the prisma client is a bit special in that it is customized.
to our schema. 


example 

```js

// instantiate the client
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// when creating a new message
await prisma.message.create({
   data: {
      content: 'Hello, world!',
      authorId: 1
   }
})

// when fetching all messages
const messages = await prisma.message.findMany();

```

## PRISMA MIGRATE

it is a tool that helps to perform database migrations. 
the changes are tracked in a migrations folder in codebase

## Over view 

prisma schema: allows developers to define their application models in an intuitive data modeling language it also contains a connection to the database and defines a generator

in schema we configure three things.

1. Data source : specifies our database connection
            - provider : the database we are using
            - url      : the location of of the database 
2. generator : indicates that we want to generate prisma client 

3. Data Model : defines our applications model

Functions of prisma schema data models

- Represent a table in relational databases
- Provide the foundation for the queries in the prisma client api

## Getting a data model

There are two major workflows for "getting" a data model into your Prisma schema:

- Manually writing the data model and mapping it to the database with Prisma Migrate
-  Generating the data model by introspecting a database

