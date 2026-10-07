require("dotenv").config();
const express=require("express");
const cors=require("cors");

const app = express();

app.get("/",(req,res)=>{
 res.send("HEllo from express server");
})

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
});
