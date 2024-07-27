const { body, validationResult } = require('express-validator')


// Body Function 

[
    body('birthdate', "must be a valid date")
    .optional({values: "falsy"})
    .isISO8601() // Enforces a YYYY-MM-DD format
]


// Chaining 

[
    body("name")
      .trim()
      .notEmpty()
      .withMessage("Name can not be empty.")
      .isAlpha()
      .withMessage("Name must only contain alphabet letters.")  
]

