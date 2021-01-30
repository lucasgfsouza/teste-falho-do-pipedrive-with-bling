import express from 'express'
import http from 'http'
import httpProxy from 'express-http-proxy'
import dotenv from 'dotenv'

const envs = dotenv.config()

console.log(envs.parsed)

const pipeProxy = httpProxy('http://localhost:1800')


const app = express()



app.get('/pipedrive', (req, res) => {
    pipeProxy(req,res)
})





app.listen(8000)

// 'https://api.pipedrive.com/v1'