import axios from 'axios'
import { urlencoded } from 'express'
import * as consts from '../helpers/consts.js'


export default {
    leadsOn: async ( infos ) => {
        return infos
        try {
            // const testeJson = { 
            //     nPedidos:3,
            //     dataCompra: '01/01/2020',
            //     fornecedor:'someone else',
            //     descricaoItem: 'something else',
            //     quantidadeItem: 2,
            //     numeroDias: '01/02/2020',
            //     valor: 16650.85
                
            // }
            const data = consts.BLING_XML()
            
            
            
            
                var config = {
                    headers: {
                    'Content-Type': 'text/xml'
                }}

            const leads = await axios.post(consts.BLING_URL + consts.BLING_KEY + '&xml=' + data)
            


            console.log(leads.data)
        } catch (error) {
            console.log(error)
        }
}}
