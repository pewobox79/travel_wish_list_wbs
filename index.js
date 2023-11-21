import express from 'express';
import countryRouter from './router/countryRouter.js'
import bodyParser from 'body-parser';
const PORT = 3000
const app = express()

app.use(bodyParser.json())
app.use("/api/countries", countryRouter)




app.listen(PORT, () => console.log(`server läuft auf ${PORT}`))