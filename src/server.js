import app from "./app.js"
import conexao from "./config/conexao.js"


conexao.sync()
    .then(()=>{
        app.listen(4000)
        console.log("Conectamos ao banco")
    })
    .catch((err)=>{
        console.log(`Erro ao se conectar ao banco ${err}`)
    })