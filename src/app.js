import express from "express"
import helmet from 'helmet'
import routes from "./routes/index.js"
import cors from "cors"

const app = express()
app.use(helmet())
app.use(express.json())
app.use(cors())

routes(app)




export default app
