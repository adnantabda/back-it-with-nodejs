const express = require("express");
const { body, validationResult } = require("express-validator");
const asyncHandler = require("express-async-handler");

const app = express();
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

const PORT = process.env.PORT || 3000;

const validationRules = [
body("username")
.trim()
.isLength({ min: 3 })
.withMessage("Username must be at least 3 characters long."),
body("email").isEmail().withMessage("Please provide a valid email address."),
body("password")
.isLength({ min: 6 })
.withMessage("Password must be at least 6 characters long."),
];

app.post(
    "/submit",
    validationRules,
    asyncHandler(async (req, res, next) => {
      const errors = validationResult(req);
  
      if (!errors.isEmpty()) {
        // If validation errors exist, return a 400 status code with errors
        return res.status(400).render("validation", {
          errors: errors.array(), // Return an array of error objects
        });
      }
  
      // Proceed if validation passes
      res.redirect("/success");
    })
  );

app.get("/success", (req, res) => {
    res.send("Form submitted successfully!");
  });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});