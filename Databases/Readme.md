# Databases 

## Database Overview

A database is an organized collection of structured information or 
data, typically stored electronically in a computer system. 
Databases are managed by Database Management Systems (DBMS), which 
allow users to interact with the data. A database can be as simple 
as a single table of data or as complex as a vast system of 
interrelated tables.

## Types of Databases

### Relational Databases (RDBMS):
- Organizes data into tables (also known as relations) consisting of rows and columns.
- Uses Structured Query Language (SQL) for defining, manipulating, and querying data.
Examples include `MySQL`, `PostgreSQL`, `Oracle`, and `SQL Server`.

### NoSQL Databases:
- Designed for specific data models, such as document, key-value, graph, or wide-column stores.
- Handles large volumes of unstructured data and is more flexible than traditional RDBMS.
Examples include `MongoDB`, `Cassandra`, `Redis`, and `Neo4j`.

### In-Memory Databases:
- Stores data in the main memory (RAM) to provide faster read and write operations.
Examples include `Redis` and `Memcached`.

### Object-Oriented Databases:
- Stores data in the form of objects, similar to object-oriented programming.

Examples include `db4o` and `ObjectDB`.

### Cloud Databases:
- Hosted on cloud platforms and offer scalable, flexible, and accessible solutions.
Examples include `Amazon RDS`, `Google Cloud SQL`, and `Azure SQL` Database.

## Relational Databases

Relational databases store data in structured tables with 
predefined relationships between them. The key concepts of 
relational databases include:

`Tables` : Composed of rows and columns, each table stores data related to a specific entity.

`Rows (Records)`: Individual entries in a table.

`Columns (Fields)`: Attributes of the data stored in a table.

`Primary Key`: A unique identifier for each record in a table.

`Foreign Key`: A field that links one table to another, 
establishing a relationship between the tables.

### Advantages of Relational Databases
`Data Integrity`: Enforces data accuracy and consistency through constraints.

`Flexibility`: Supports complex queries and data manipulation.

`Scalability`: Handles large volumes of data with proper indexing and optimization.

`Normalization`: Reduces data redundancy by organizing data into separate tables.

## SQL (Structured Query Language)

SQL is the standard language for interacting with relational databases. It includes several sublanguages:
### Data Definition Language (DDL):
`CREATE`: Creates a new table, index, or database.
`ALTER`: Modifies an existing database object, such as adding a column.
`DROP`: Deletes a database object, such as a table or index.

Example:

```sql

CREATE TABLE Employees ( EmployeeID INT PRIMARY KEY, 
            FirstName VARCHAR(50), 
            LastName VARCHAR(50), 
            Department VARCHAR(50) ); 

ALTER TABLE Employees ADD Email VARCHAR(100); DROP TABLE Employees; 

```
### Data Manipulation Language (DML):
`SELECT`: Retrieves data from the database.
`INSERT`: Adds new data to a table.
`UPDATE`: Modifies existing data in a table.
`DELETE`: Removes data from a table.

Example:

```sql

SELECT FirstName, LastName FROM Employees WHERE 
        Department = 'Sales'; 
        
INSERT INTO Employees (EmployeeID, FirstName, LastName, Department) 
VALUES (1, 'John', 'Doe', 'Marketing'); 

UPDATE Employees SET Department = 'Sales' WHERE EmployeeID = 1;
DELETE FROM Employees WHERE EmployeeID = 1; 
```

### Data Control Language (DCL):

`GRANT`: Provides user access privileges to the database.
`REVOKE`: Removes user access privileges.

Example:

```sql

GRANT SELECT ON Employees TO User1; 
REVOKE SELECT ON Employees FROM User1; 

```
### Transaction Control Language (TCL):

`COMMIT`: Saves all changes made during the current transaction.
`ROLLBACK`: Reverts all changes made during the current transaction.
`SAVEPOINT`: Sets a point within a transaction to which you can later roll back.

Example:

```sql

Copy code

BEGIN; INSERT INTO Employees (EmployeeID, FirstName, LastName, Department) VALUES (2, 'Jane', 'Smith', 'HR'); SAVEPOINT BeforeUpdate; UPDATE Employees SET Department = 'Finance' WHERE EmployeeID = 2; ROLLBACK TO BeforeUpdate; COMMIT; 
```

## PostgreSQL

PostgreSQL is a powerful, open-source object-relational database 
system known for its reliability, robustness, and feature-rich 
capabilities. It supports a wide range of data types, indexing 
methods, and advanced features like transactions and concurrency.

### Key Features of PostgreSQL

- ACID Compliance:
Ensures data integrity with Atomicity, Consistency, Isolation, and Durability properties.

- Data Types:
Supports a variety of data types, including custom types and JSONB for storing JSON data.

- Extensibility:
Allows users to define custom functions, operators, and data types.

- Concurrency Control:
Uses Multi-Version Concurrency Control (MVCC) to handle simultaneous data access without conflicts.

- Advanced Indexing:
Supports various indexing methods like B-tree, hash, GIN, and GiST for faster data retrieval.

- Full-Text Search:
Provides built-in full-text search capabilities for efficient text querying.