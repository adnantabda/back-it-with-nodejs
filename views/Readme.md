# Views 

views are user-facing part of our application it is what our users see and interact with. 

we use template engines to create our views. we write template files
in our codebase that get transformed into html when we respond to server request. any variables defined in the template get replaced with data.

## Using EJS 

`npm install ejs`

setting up in app.js 

```js

app.set('views', path(__dirname, 'views'))
app.set('view engine', 'ejs')


```

in EJS the <% %> tags allow to use javascript, it let's write conditions, loops as well as using variables.

to output a variable as a value we use <%=

example 

```js

<% const animals = ["Cat", "Dog", "Lemur", "Hawk"]  %>

<ul>
  <% animals.map((animal)=>{  %>
  <li><%= animal %>s are cute </li>
  <% }) %>
</ul>

```

## Reusable Templates

to share different pages across different ejs files 
for reusability we make us of `include command` with the of a file
and optionally an object of data we wish for 


example 

<!-- navbar.ejs -->
```js

<nav>
  <ul>
     <% for (let i = 0 ; i < links.length; i++){ %>
      <li>
        <a href="<%= links[i].href %">>
        <span> <%= links[i].text %> </span>
        </a>
      </li>
      <% } %>
      </ul>
    </nav>


```


<!-- index.ejs -->


```js
<!-- index.ejs -->
<html>
  <head>
    <title>Homepage</title>
  </head>
  <body>
    <%- include('navbar', {links: links}) %>
  </body>
</html>




```

`<%  %>` for conditions, loops 
`<%= %>` for variables
`<%- %>` for raw output like include keyword


## Serving Static Assets 

