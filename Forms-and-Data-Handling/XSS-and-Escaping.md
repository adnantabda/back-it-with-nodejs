# Cross Site Scripting (XSS) and Escaping 

when rendering user generated content in a web application.
it is important to properly escape data before displaying it in HTML.

## What is XSS ?

`cross-site Scripting (XSS)` is a security vulnerability that allows an
attacker to inject malicious `scripts` into a web pages viewed by other 
users.

### Example 

`example without escaping `
```html

<div>
    About Me: <%- description %>

</div>

```
user input

```html

<script>alert("Hacked")</script>

```
rendered output without escaping 

```html

<div>
    About Me: <script>alert("Hacked")</script>
</div>

```

### Escaping in EJS

EJS use `<%= %>` to escape user input this ensures special characters are
displayed as plain text rather than interpreted as HTML or Javascript.

rendered output with escaping 

```html

<div>
    About Me: <%= description %>
</div>

```

```html

<div>
    About Me: &alt;script&gt;alert(&quot;Hacked!&quot);alt/script&gt;
</div>


```

NB: 
why not to escape when we receive the input, 
because escaping depends on the context where the data is used 
