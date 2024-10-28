const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient

// async function main() {
//     const allUsers = await prisma.user.findMany()
//     console.log(allUsers)
// }


// async function createUser(){
//     await prisma.user.create(
//         {
//             data: {
//                 name: 'Adnan', 
//                 email: 'adnan@prisma.io',
//                 posts: {
//                     create: { title: 'first prisma client field'}
//                 },
//                 profile: {
//                     create: { bio : 'go every where prisma is the best '}
//                 }
//             }
//         }
//     )
// }

// createUser()
//             .then(async()=>{
//              await prisma.$disconnect()
//             })
//             .catch(async(e)=>{
//             console.log(e)
//             await prisma.$disconnect()
//              process.exit(1)
//             })


async function main() {
  await prisma.user.create({
    data: {
      name: 'Alice',
      email: 'alice@prisma.io',
      posts: {
        create: { title: 'Hello World' },
      },
      profile: {
        create: { bio: 'I like turtles' },
      },
    },
  })

  const allUsers = await prisma.user.findMany({
    include: {
      posts: true,
      profile: true,
    },
  })
  const post = await prisma.post.update({
    where: { id: 1 },
    data: { published: true },
  })
  console.log(post)
  console.dir(allUsers, { depth: null })
}
main()
    .then(async()=>{
        await prisma.$disconnect()
    })
    .catch(async (e) =>{
        console.log(e)
        await prisma.$disconnect()
        process.exit(1)
    })