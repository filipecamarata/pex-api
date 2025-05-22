import app from "./app.js"
import routes from "./routes/index.js"
import dotenv from "dotenv"
import cors from "cors"

const envFile = process.env.NODE_ENV === 'dev' ? '.env.dev' :'.env'
dotenv.config({path: envFile})

const port = process.env.PORT_APP



app.listen(port, () => console.log(`app runnig on port ${port}`))