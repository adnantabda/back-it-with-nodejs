function authMiddleware(req, res, next){
    console.log('inside the middleware')
    const token = req.header('Authorization')
    if(!token){
        return res.status(401).send('Access denied. no token provided')
    }
    try{
        req.user= { id: 1, name: 'John Doe'}
        next()
    }catch(error){
        res.status(400).send('Invalid token')
    }
}

module.exports = authMiddleware
