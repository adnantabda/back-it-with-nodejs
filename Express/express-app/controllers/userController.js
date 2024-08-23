const getUserProfile = (req, res)=>{
    console.log('inside the controller')
    const userId = req.user.id
    const userProfile = {
        id: userId,
        name: 'John Doe',
        email: 'john@example.com'
    };
    res.status(200).json(userProfile)
}

module.exports = {
    getUserProfile,
}