# Html Forms 

simple html form 
```html

<form action="/user/create" method="POST">
    <label for="fullName">Full Name</label>
    <input type="text" placeholder="Jimmy Slim" name="fullName" id="fullName">
    <button type="submit">Submit</button>
</form>

```

in this form the `name` attribute plays a key role. it defines how
our input will be identified in the form data sent to our server.

The `type="submit"` button then allows the user to upload the entered data to the server.

the form attribute define how to communicate with our server
- `action :` defines the location or url when the data is sent if this is omitted the form will sent back to current page

- `method :` defines the http method to use

`POST` is more secure it keeps sensitive information out of the url
`GET` is for forms that don’t modify data, such as search forms, or when you want the form submission to be bookmarkable or shareable via URL.


`POST/REDIRECT/GET (PRG)`  it is a design pattern which helps prevent duplicate Post Requests. 

## Validation and Sanitization 

- `validation` ensures user input meets the criteria
- `sanitization` cleans user input to prevent malicious data from 
being precessed by removing or encoding potentially malicious characters

`express-validator` is library that helps with this two concepts

## Express-validator

- body()
- validationResult()

the body() function allows us to specify which field in the request
body should be validated and sanitized and how to handle it

### Chaining Validations

we can also chain multiple validation methods with unique error messages if the checks fail

