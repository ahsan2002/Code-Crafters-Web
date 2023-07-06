import express from 'express';
import path from 'path';
import cors from 'cors';


const app = express()
const port = process.env.PORT || 5001;


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})