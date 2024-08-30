# SQL 

## Querying Data

- ###  SQL SELECT statement 

the select statement used to query or select data from one or more 
tables. 

basic syntax 

```sql

SELECT 
    select_list  
FROM 
    table_name;


```

When evaluating the SELECT statement, the database system evaluates 
the FROM clause first and then the SELECT clause. It’s like from a 
table, select data from these columns.

we use asterisk `*` to select all the columns

we can also perform simple calculation while retrieving data 

```sql

SELECT 
    first_name, 
    last_name, 
    salary, 
    salary * 1.05
FROM
    employees;

```

The expression salary * 1.05 adds 5% to the salary of every 
employee. By default, SQL uses the expression as the column heading:

we can assign alias name to the attribute while retrieving data 
using `AS` Key word 

```sql

SELECT 
    first_name, 
    last_name, 
    salary, 
    salary * 1.05 AS new_salary
FROM
    employees;

```


## Sorting Data

- ### ORDER BY Clause

The order by is an optional clause of the select statement. it 
allows us to sort the rows returned by the SELECT clause by one or 
more sort expressions in ascending or descending order

```sql

SELECT 
    select_list
FROM
    table_name
ORDER BY 
    sort_expression [ASC | DESC];


```

the database will evaluate the statement in the this order 
`FROM > SELECT > ORDER BY.`

- the order by clause also allows us to sort the result set by 
multiple expressions. 

```sql 


SELECT 
    select_list
FROM
    table_name
ORDER BY 
    sort_expression_1 [ASC | DESC],
    sort_expression_2 [ASC | DESC];


```

Examples 

```sql 

SELECT
	employee_id,
	first_name,
	last_name,
	hire_date,
	salary
FROM
	employees
ORDER BY
	first_name;

```

## Filtering Data

- ### SQL DISTINCT 

To remove duplicate rows from a result set, we use the DISTINCT 
operator in the SELECT clause;

```sql

SELECT DISTINCT
    column1, column2, ...
FROM
    table1;

```

```sql

SELECT
	job_id,
	salary
FROM
	employees
ORDER BY
	job_id,
	salary DESC;

```

the DISTINCT operator treats all NULL the same. Therefore, the DISTINCT operator
keeps only one NULL in the result set. 

in the database, NULL means unknown or missing data.

`Note` that this behavior may be different between database products.


- ### SQL LIMIT 

the limit clause used to limit the number of rows returned from a query
- To limit the number of rows returned by a select statement, we use the LIMIT and OFFSET clauses.

```sql 

SELECT 
    column_list
FROM
    table1
ORDER BY column_list
LIMIT row_count OFFSET offset;


```

- in this the `LIMIT row_count` determines the number of rows ( row_count ) return by
the query 
- The `OFFSET` clause skips the offset rows before beginning to return the rows 
- The OFFSET clause is optional. if we omit it. the query will return the row_count rows from the first row returned by the select clause 

When you use the LIMIT clause, it is important to use an ORDER BY clause to ensure 
the order of rows in the result set.

- ### SQL FETCH 

To limit the number of rows returned by a query, you use the `LIMIT` clause. 
The limit Clause is widely supported by many databases but not the standard SQL.

- sql:2008 introduced the `OFFSET FETCH`  clause which has a similar function to the 
`LIMIT` clause . The offset fetch clause allows us to skip n first rows in a result set before starting to return any rows 

```sql

OFFSET offset_rows { ROW | ROWS }
FETCH { FIRST | NEXT } [ fetch_rows ] { ROW | ROWS } ONLY

```

- ROWS and  ROW , FIRST and NEXT are synonyms we use them interchangeably 
- The offset_rows is an integer number which must be zero or positive. in case the
offset _rows is greater than the number of rows in the result set, no rows will be returned

- The fetch_rows is also an integer number that determines the number of rows to be 
returned. The value of fetch_rows is equal to or greater than one.


- to get considered output we can use FETCH with order by clause 

- ### SQL WHERE 

This is the most commonly used sql clause. it used to select specific rows from a table.

```sql

SELECT 
    column1, column2, ...
FROM
    table_name
WHERE
    condition;

```

- This clause appears immediately after the `FROM`.
- it contains one or more logical expression that evaluate each row 
in the table. if a row that causes the condition evaluates to true 
it will include the result set. else it will exclude it 

SQL has three logic value `TRUE` , `FALSE ` and `UNKNOWN`

## Operators

- ### Comparison Operator 

The comparison operator allows us to test if two expressions are the
same. 


+------------+--------------------------+
|  operator  | For                      |
+------------+--------------------------+
| =          | checking equality        |
| <> or !=   | not equal to             |
| >          | greater than             |
| <          | less than                |
| >=         | greater than or equal to |
| <=         | less than or equal to    |
+------------+--------------------------+


`Note that the equal operator cannot be used to compare null values`

`To compare null values, you use the IS NULL operator instead:`

- ### Logical Operator 

A logical operator allows you to test for the truth of a condition.

`ALL`	    Return true if all comparisons are true
`AND`	    Return true if both expressions are true
`ANY`	    Return true if any one of the comparisons is true.
`BETWEEN`	Return true if the operand is within a range
`EXISTS`	Return true if a sub-query contains any rows
`IN`	    Return true if the operand is equal to one of the value in a list
`LIKE`	    Return true if the operand matches a pattern
`NOT`	    Reverse the result of any other Boolean operator.
`OR`    	Return true if either expression is true
`SOME`	    Return true if some of the expressions are true

`IS NULL`   operator compares a value with a null value and returns true if the compared value is null; otherwise, it returns false.

- The like operator compares a value to similar values using a wildcard operator. 

SQL provides two wildcards used in conjunction with the LIKE operator:

- The `%` sign represents zero, one or multiple characters 
- The `_` sign represents a single character.

```sql 

SELECT 
    employee_id, first_name, last_name
FROM
    employees
WHERE
    first_name LIKE 'jo%'
ORDER BY first_name;

```
this example finds all employees whose first name starts with the string jo:

```sql 
SELECT 
    employee_id, first_name, last_name
FROM
    employees
WHERE
    first_name LIKE '_h%'
ORDER BY first_name;
```
This example finds all employees with the first names whose the second character is  h:

- The All operator compares a value to all values in another value
set it must be preceded by a comparison operator and followed by 
sub-query 

`` comparison_operator ALL (subquery) ``

