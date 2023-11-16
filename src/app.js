import express from 'express'
import compression from 'express-compression'

const app = express()
app.use(compression({
    brotli: { enabled: true, zlib: {} }
}))

app.get('/stringlargo', (req, res) => {
    let string = "Coder lovers!"
    for (let index = 0; index < 10e4; index++) {
        string += "<br>Mas letras en el string"
    }
    res.send(string)
})

app.listen(8080, () => console.log('Server Up'))