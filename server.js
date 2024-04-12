import express from 'express';
import 'dotenv/config'
import bodyParser from 'body-parser';
import route from './route/route.js';


const app = express();
const PORT = process.env.PORT || 5000
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use('/himsprovider/*', route)

app.use((req, res, next) => {
    const error = new Error('Not found.')
    error.status = 404
    next(error)
})

app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({
        error: {
            message: error.message
        }
    })
})

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})