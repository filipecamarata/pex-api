import "dotenv/config";
import app from "./app.js"
import routes from "./routes/index.js"

const port = process.env.PORT

routes(app)

app.listen(port, () => console.log(`app runnig on port ${port}`))