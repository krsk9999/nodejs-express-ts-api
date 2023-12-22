import "dotenv/config"
import express from 'express'
import cors from "cors"
import routes from "./routes/index"

const PORT = process.env.PORT || 3001 

const app = express()
app.use(express.json());
app.use(cors())
app.use("/", routes)


app.listen(PORT, ()=> console.log(`App listening on port ${PORT}`))