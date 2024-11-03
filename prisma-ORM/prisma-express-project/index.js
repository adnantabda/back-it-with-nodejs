const express = require("express")
const { PrismaClient } = require("@prisma/client")
const app = express()
const prisma = new PrismaClient()

app.use(express.json())
app.post('/users', async (req, res)=>{
    const { name , email } = req.body;
    console.log(req.body)
    try{
        const user = await prisma.user.create({
            data: { name , email}

        })
        res.status(201).json(user)
    }catch(err){
        res.status(500).json({err: "User already exists or invalid Data"})
    }
})

app.post('/profile', async(req,res)=>{
    const { name , email } = req.body

    try{
    const user = await prisma.user.create({
        data: {
            email: email,
            name: name,
            posts:{
                create: [
                    { 
                        title: 'My first data at prisma',
                        categories: {
                            create: {
                                name: 'office'
                            }
                        }
                    }, {
                        title: "How to connect", 
                        categories: {
                            create: [{ name: 'Database'}, {name: 'Tutorial'}]
                        }
                    }
                ]
            }
        }
    })
    res.json(user)
}catch(err){
    res.json("something went wrong !!")

}
})

app.get('/users', async(req, res)=>{
    const users = await prisma.user.findMany({
        include:{
            posts: true
        }
    });
    res.json(users)
})

app.get("/",async(req, res)=>{
    const user = await prisma.user.create({
        data: {
            email: 'elsa@gmail.com',
            name: 'elsa',
        }

    })
    res.send("End of response")
})


process.on('SIGINT', async () => {
    await prisma.$disconnect();
    process.exit();
  });  
app.listen(3000, ()=>{
    console.log("Running Server")
})
