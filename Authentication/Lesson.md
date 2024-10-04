## Authentication 

### Set up

first create a new db 
create a table 

install the necessary packages 

npm install express express-session pg passport passport-local ejs

### Authentication 

Node + Passport 
user authentication 

- passport-local strategy 
- passport-jwt strategy 

user authentication choices 
- session 
- jwt
- OAuth
    - in-house
    - SaaS
- Other/ Ad-Hoc

what is passport JS

it is a module that determine whether the requestor has permission to view that resource on each HTT request, it use something called "Strategy" if the user doesn't have permission it will throw 401

each strategy uses the passport js framework as a template 
the passport local strategy utilizes cookies Express sessions and some authentication logic

### JWT

to understand jwt we have three things 
- the header 
we have two things on the header 

alg:
type:

- payload

is a metadata about some entity. in most cases it is about a user 
it gives us general info about the user 

- and the signature.

