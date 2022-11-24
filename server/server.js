const express = require("express")
const axios = require("axios")
const cors = require("cors")
const morgan = require("morgan")
const app = express()
app.use(express.json())

app.use(cors({
  origin : "http://localhost:8080",
  methods : ["GET","POST"]
})) 

app.use(morgan("tiny"))

app.get("/*/*",async(req,res) => {
  try{
    console.log(req.path)
    let url = `https://test.swagger.print2block.in${req.path}`
    console.log(url);
    const {data} = await axios.get(url)
    if(!data){
      throw new Error ("Data not available")
    }else{
      return res.status(200).json(data)
    }
  }catch{
    res.status(400).json({message : error.message})
  }
})

app.post("/*/*",async(req,res) => {
  try{
    console.log(req.path)
    let url = `https://test.swagger.print2block.in${req.path}`
    console.log(url);
    let sampleData = req.body
    const {data} = await axios.post(url,sampleData)
    if(!data){
      throw new Error ("Data not available")
    }else{
     return res.status(200).json(data)
    }
  }catch{
    res.status(400).json({message : error.message})
  }
})

const home = async () => {
  try {
      app.listen(process.env.PORT, () => {
          console.log(`Server is running at the port ${process.env.PORT}`)
      })
  } catch (error) {
      console.error(error)
  }
}

home()