import express from 'express'
import { CompressionTypes } from 'kafkajs'
import axios from 'axios'

import { PIPE_KEY, PIPE_URL } from './helpers/consts.js'

const routes = express.Router()

routes.get('/pipedrive', async (req, res) => {
    const message = {
        user: { id: 1, name: 'Matheus Mercadante' },
        couse: 'Kafka'
    }   
    
    // console.log(JSON.stringify(message))
    await req.producer.send({
        topic: 'issue-bling',
        messages: [
            { value: JSON.stringify(message) }
        ]
    })
    // const leadsWon = await axios.get(`${PIPE_URL}${PIPE_KEY}`)

    // const message = leadsWon.data.data.map((data) => {
    //     return {
    //         id: data.id,
    //         nPedidos: 10,
    //         dataCompra: data.won_time.substring(0, 10),
    //         fornecedor: data.org_name,
    //         descricaoItem: 'some description',
    //         quantidadeItem: 5,
    //         numeroDias: '01/01/2020',
    //         valor: data.weighted_value,
    //         formaPagamento: 'dinheiro'
    //     }
    // })

    // await req.producer.send({
    //     topic: 'issue-bling',
    //     compression: CompressionTypes.GZIP,
    //     messages: [
    //         { value: JSON.stringify(message) }
    //     ]
    // })
    
    return res.json({ ok:true })
})

export default routes