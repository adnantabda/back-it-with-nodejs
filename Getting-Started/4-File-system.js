const fs = require('fs');


function renameFile(currentName,updatedName ){
    fs.rename(currentName, updatedName, err => {
        if (err) {
          return console.error('something went wrong');
        }
      });
}

renameFile('before.json', 'after.json')


const fileName = 'test.txt'

fs.readFile(fileName, 'utf8', (err, data) => {
    if (err){
        console.log(err)
        return 
    }
    console.log(data)
    const content = 'some content'
    fs.writeFile(fileName, content, err2 => {
        if (err2){
            console.log(err)
            return
        }
        console.log('wrote some content ')
        fs.readFile(fileName, 'utf8', (err3, data3)=>{
            if (err3){
                console.log(err3)
                return 
            }
            console.log(data3)
        })
    })
})

// This is what we call a call back hell 


content = "import fs from 'node:fs'"
fs.writeFile('newFile.js' , content, err =>{
    if (err){
        console.log(err)
    }else{
        console.log('no error detected')
    }
})

try{

    fs.writeFileSync('newFileSync.txt', 'Synchronous', 'utf8' )
}catch (err){
    console.log(err)
}

const fss = require('node:fs/promises')

async function example(){
    try{
        const data = await fss.readFile('newFile.js' , { encoding : 'utf8'})
        console.log(data)
    }catch(err){
        console.log('error occurred !!')
        console.log(err)
    }
}

example()