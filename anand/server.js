const express=require("express")
const mongodb=require('mongodb')
const bcryptjs=require('bcryptjs')
const mongoClient=mongodb.MongoClient
let dburl="mongodb:/localhost:27017"



let port=3000

const app=express()
app.use(express.json())




app.get('/',async (req,res)=>{
    res.json({message:"data given to frontend "})

})


app.post("/register",async(req,res)=>{
try { 
     let client=await mongoClient.connect('dburl')
let db=client.db('myproject')
let salt =bcryptjs.genSalt(10)
let hash=await bcryptjs.hash(req.body.password,salt)
let response=await db.collection('users').insertOne('req.body')
res.json({
    message:"new record updated"

})

} catch (err) {
    res.json({
        message:"something went wrong"
    })
}finally {
    client.close()
}

})

app.post('/login',async(req,res)=>{
   try {
        let client=await mongoClient.connect('dburl')
        let db=client.db('myproject')
        let user=await db.collection('users').findOne({"email":"req.body.email"})
        if(user) {
            let compare=await bcryptjs.compare(req.body.password,user.password)
    
    
        
        if(compare) {
            res.json({
                message:"allowed"
            })
           
        }else{
            console.log("not correct details")
    
        }
    
    }    else{
        res.json({
            message:"record not available"
        })
    }

}catch(err) {
    res.json({
        message:"something went wrong"
    })
} finally{
    client.close()
}
    
    })




app.listen(port,()=>{
    console.log("server is running")
})