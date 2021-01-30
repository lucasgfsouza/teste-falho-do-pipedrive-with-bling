import express from 'express'
import { Kafka } from 'kafkajs'

import routes from './routes.js'

const app = express()

const kafka = new Kafka({ 
    clientId: 'pipedrive',
    brokers: ['localhost:9092'],
    retry: {
        initialRetryTime: 300,
        retries: 10
    }
 }) 
 
 const producer = kafka.producer()

app.use((req, res, next) => {
    req.producer = producer

    return next()
})

 app.use(routes)
 
 async function run() {
     await producer.connect()

     
    
     app.listen(1800)
 }

run().catch(console.error)