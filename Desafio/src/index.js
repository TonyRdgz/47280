import express from 'express'


const app = express()
const PORT = 4000
const PATH = "./users.json"



app.use(express.urlencoded({extended: true}))
app.use(express.json()) //

app.get('/', (req, res) => {
    
    res.send("Página principal")
})

    app.post('/users', async (req, res)=>{
        console.log(req.body)
        res.send("Usuario creado!!")
})

app.listen(PORT, ()=>{
    console.log(`Server on port ${PORT}` )
})