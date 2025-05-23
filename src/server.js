import app from "./app.js"

const port = process.env.PORT

app.listen(port, () => console.log(`app runnig on port ${port}`))