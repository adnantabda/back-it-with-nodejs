## What is prisma ORM ?

prisma Client: auto generated and type safe query builder
prisma migrate: migration system 
prisma studio: GUI to view and edit data in database 

### How does prisma orm works 

- we start from the prisma schema it allows developers to define application models in an intuitive data modeling language.

the schema configure three things 

- Data Source: Specifies your database connection (via .env)
- Generator: indicates that you want to generate prisma client
- Data Model: defines data model

set up code 

```js 


import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
```

