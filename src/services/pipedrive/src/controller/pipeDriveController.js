// PIPE_KEY=80078f81b6ac1073001462c2c32a02f1d708809b
// PIPE_URL=https://api.pipedrive.com/v1
import axios from 'axios'
import lib from 'pipedrive'
import * as consts from '../helpers/consts.js'



const controller = lib.ActivitiesController

let input = []
input['status'] = 'Won'

// nPedidos, dataCompra, fornecedor, descricaoItem, quantidadeItem, numeroDias, valor, formaPagamento
//    10       won_time    org_name   'some description'  5            10        weighted_value, 'dinheiro' 


export default {
    getWon: async (req, res) => {
        try {
                        
            
            
            const user = await axios.get(`${consts.PIPE_URL}${consts.PIPE_KEY}`)
            const sucessDeals = user.data.data.map((data) => {

                return {
                    id: data.id,
                    nPedidos: 10,
                    dataCompra: data.won_time.substring(0, 10),
                    fornecedor: data.org_name,
                    descricaoItem: 'some description',
                    quantidadeItem: 5,
                    numeroDias: '01/01/2020',
                    valor: data.weighted_value,
                    formaPagamento: 'dinheiro'
                }
            })
            console.log(sucessDeals)
            

        } catch (error) {
            console.log(error)
        }
    }
}




