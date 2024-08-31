# GROUP BY CLAUSE

The group by is an optional clause of the `SELECT` statement.
it allows us to group rows based on values of one or more columns. it returns one row for each group

syntax 
```sql

SELECT
	column1,
	column2,
	aggregate_function(column3)
FROM
	table_name
GROUP BY
	column1,
	column2;

```

without aggregate functions the group by clause behaves like a
distinct clause 


# Aggregate Functions 

aggregate functions operates on a set of values and returns a single
value. 

it commonly used with GROUP BY clause 

```sql

SELECT c1, aggregate_function(c2)
FROM table
GROUP BY c1;

```

common aggregate functions 

- AVG 
- COUNT 
- MAX 
- MIN 
- SUM 
   

we can use aggregate functions only in the following 
- The select list of `SELECT` statement, either a subquery or an outer
query

- a `HAVING` clause 

## AVG 

```sql
AVG( ALL | DISTINCT)
```

The ALL keyword instructs the AVG() function to calculate the 
average of all values while the DISTINCT keyword forces the 
function to operate on distinct values only. By default, the ALL 
option is used.

example
```sql

SELECT 
    department_name, ROUND(AVG(salary), 0) avg_salary
FROM
    employees
        INNER JOIN
    departments USING (department_id)
GROUP BY department_name
ORDER BY department_name;

```

## MIN 

returns the minimum value of a set 

```sql 

SELECT 
    department_name, MIN(salary) min_salary
FROM
    employees
        INNER JOIN
    departments USING (department_id)
GROUP BY department_name
ORDER BY department_name;

```
## MAX

returns the maximum value of a set 

```sql 

SELECT 
    department_name, MAX(salary) max_salary
FROM
    employees
        INNER JOIN
    departments USING (department_id)
GROUP BY department_name
ORDER BY department_name;

```

## COUNT

returns the number of items in a set.

```sql
COUNT ( [ALL | DISTINCT] column | expression | *)
```
```sql 

SELECT 
    department_name, COUNT(*) headcount
FROM
    employees
        INNER JOIN
    departments USING (department_id)
GROUP BY department_name
ORDER BY department_name;
```

## SUM 

returns the sum of all values 
SUM(ALL | DISTINCT column)

