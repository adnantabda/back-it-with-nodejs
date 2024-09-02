# SQL CASE

The case expression allows us to evaluate a list of conditions and returns one of of
possible results. The CASE expression has two formats simple case and searched case 

syntax 

```sql 

CASE expression
WHEN when_expression_1 THEN
	result_1
WHEN when_expression_2 THEN
	result_2
WHEN when_expression_3 THEN
	result_3
...
ELSE
	else_result
END

```

# SQL Alias

it allows us to assign a table or a column a temporary name 
during query execution. SQL has two types of aliases: table and column aliases.

Since we assign aliases to columns in the `SELECT` clause, you can only reference the aliases in the clauses that are `evaluated` after the SELECT clause.

the execution order is 
`FROM > WHERE > SELECT`

# JOINING TABLE 

the select statement can link multiple tables together 
the process of linking tables is called joining there inner joins, left join, right join, full outer join and etc..

## INNER JOIN 

the inner join is the intersection of tables. for each row in a table the inner join clause finds the matching rows in the another table. if a row is matched, it is included in the final result set.

Suppose the columns in the A and B tables are a and b. The following statement illustrates the inner join clause:

```sql 

SELECT a
FROM A
    INNER JOIN B ON b = a;

```

The INNER JOIN clause appears after the FROM clause. The condition 
to match between table A and table B is specified after the ON 
keyword. This condition is called join condition i.e., B.n = A.n

the inner join can join multiple tables as long as they have relationship typically foreign key relationships

## LEFT JOIN

the left join returns all rows from the left table whether or not there is a matching row in the right table 

if we have two tables A and B. The table A has four rows 1, 2, 3 
and 4. The table B also has four rows 3, 4, 5, 6.

When we join table A with table B, all the rows in table A (the 
left table) are included in the result set whether there is a 
matching row in the table B or not.

```sql 

SELECT
	A.n
FROM
	A
LEFT JOIN B ON B.n = A.n;

```

