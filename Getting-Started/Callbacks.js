function MyForEach(arr, callback){
    for (let i = 0; i <arr.length; i++){
        callback(arr[i])
    }
}


const arr =[2,3,2,1,3]

MyForEach(arr,(item)=>{
    console.log(item + 2)
})


var i = 0

setInterval(()=>{
    console.log("iteration  " + 1)
    i++
},1000)
