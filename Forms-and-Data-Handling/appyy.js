const express = require('express')
const asyncHandler = require('express-async-handler')
const { body, validationResult } = require('express-validator')
const app = express()
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')

const validationRules = [
    body('username')
        .isLength({min: 3})
        .withMessage("minimum length 3")
    ,body('email').isEmail().withMessage("Email Required")
    ,body('password').isLength({min: 6}).withMessage("Minimum length of password 6")
]

app.get('/', (req, res)=>{
    res.render('validation', {errors: []})
})

app.post('/submit', validationRules,asyncHandler(async(req, res)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        console.log(errors)
        console.log("inside")
        return res.status(400).render('validation', {errors: errors.array()})
    }

    res.render('success')
}))

// "/submit",
// validationRules,
// asyncHandler(async (req, res, next) => {
//   const errors = validationResult(req);

//   if (!errors.isEmpty()) {
//     // If validation errors exist, return a 400 status code with errors
//     return res.status(400).render("index", {
//       errors: errors.array(), // Return an array of error objects
//     });
//   }

//   // Proceed if validation passes
//   res.redirect("/success");
// })

app.listen(3000, ()=>{
    console.log("running")
})