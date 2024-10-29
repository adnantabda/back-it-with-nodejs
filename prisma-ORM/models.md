## DATA MODELS

it defines application model

- entities 
- tables or collections
- form the foundation of queries 

example 

```prisma 

model User {
  id      Int      @id @default(autoincrement())
  email   String   @unique
  name    String?
  role    Role     @default(USER)
  posts   Post[]
  profile Profile?
}

model Profile {
  id     Int    @id @default(autoincrement())
  bio    String
  user   User   @relation(fields: [userId], references: [id])
  userId Int    @unique
}

model Post {
  id         Int        @id @default(autoincrement())
  createdAt  DateTime   @default(now())
  updatedAt  DateTime   @updatedAt
  title      String
  published  Boolean    @default(false)
  author     User       @relation(fields: [authorId], references: [id])
  authorId   Int
  categories Category[]
}

model Category {
  id    Int    @id @default(autoincrement())
  name  String
  posts Post[]
}

enum Role {
  USER
  ADMIN
}

```

the data model is made up of 

- Models: define numbers fields, including relations
- Enums 
- Attributes 

### 1. **Models (model primitives):**
   - **Models** are like blueprints for database tables. Each model represents a table, and within it, you define various **fields** that represent the columns in the table. These fields have specific **data types** (e.g., `String`, `Int`, `DateTime`), also known as **primitives**.
   - **Relationships** between models are also defined here. For instance, you can specify a one-to-many or many-to-many relationship between two models, which Prisma will map in the database using foreign keys or join tables.

### 2. **Enums (enum primitives):**
   - **Enums** are custom data types with a limited set of possible values. They’re like categories or options that a field can have. For example, if you have a `status` field in a `Task` model, you might use an Enum to restrict it to values like `PENDING`, `IN_PROGRESS`, and `DONE`.
   - Note that **not all database connectors support Enums**; Prisma's support depends on the database you use.

### 3. **Attributes and functions:**
   - **Attributes** modify the behavior of fields or models. For example, `@id` can be used to set a primary key, `@unique` ensures the field has unique values across rows, and `@default` sets a default value.
   - **Functions** within attributes can handle things like generating UUIDs, setting the current date automatically, or managing relationships (`@relation`).
