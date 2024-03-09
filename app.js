const express = require(`express`)
const route = require(`./routes/routes`)
const port= 3000;

const app=express();

app.use(express.json())
app.use(`/books`,route)



app.listen(port,()=>{
    console.log(`server is running on port: ${port}`)
})