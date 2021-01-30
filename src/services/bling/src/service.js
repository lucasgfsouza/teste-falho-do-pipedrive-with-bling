import express from 'express'
import { Kafka, logLevel } from 'kafkajs'

const app = express()

const kafka = new Kafka({
    clientId: 'bling',
    brokers: ['localhost:9092'],
    logLevel: logLevel.DEBUG
})

const topic = 'issue-bling'
const consumer = kafka.consumer({ groupId: 'sales-group' })

const producer = kafka.producer()

async function run() {
    await consumer.connect()
    await consumer.subscribe({ topic })
    
    await consumer.run({ 
        eachMessage: async ({ topic, partition, message }) => {
            // const prefix = `${topic}[${partition} >>> ${message.offset}] / ${message.timestamp}`
            // console.log(`- ${prefix} ${message.key}##${message.value} `)
            console.log(message)
            // const payload = JSON.parse(message.value)

            // producer.send({ 
            //     topic: 'issue-mongo',
            //     messages: [
            //         { value: payload }
            //     ]
            // })
        }
    })
}


run().catch(console.error)

