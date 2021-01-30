import * as consts from '../helpers/consts.js'


function printXML(npedido, dataCompra, fornecedor, descricaoItem, quantidadeItem, numeroDias, valor, formaPagamento){
    const xml = `<?xml version="1.0" encoding="utf-8" ?>
<pedidocompra>
<numeropedido>${npedido}</numeropedido>                   
**<datacompra>${dataCompra}</datacompra>**
<dataprevista>02/08/2019</dataprevista>
<ordemcompra>123456789</ordemcompra>
<desconto>10%</desconto>
<observacoes>Observações normais...</observacoes>
<observacaointerna>Observações internas...</observacaointerna>
<fornecedor>
    <id>1234567890</id>
    **<nome>${fornecedor}</nome>**
    <tipopessoa>F</tipopessoa>
    <cpfcnpj>01234567890</cpfcnpj>
    <ie></ie>
    <rg>1234567</rg>
    <contribuinte>9</contribuinte>
    <endereco>Rua Marques de Souza 1024</endereco>
    <endereconro></endereconro>
    <complemento></complemento>
    <bairro>São Francisco</bairro>
    <cep>95.703-012</cep>
    <cidade>Bento Gonçalves</cidade>
    <uf>RS</uf>
    <fone>(54) 2222-2222</fone>
    <celular>(54) 92222-2222</celular>
    <email>emailteste2019@gmail.com</email>
</fornecedor>
<itens>
<item>
    <codigo>123456</codigo>
    **<descricao>${descricaoItem}</descricao>**
    <un/>
    **<qtde>${quantidadeItem}</qtde>**
    <valor>12.50</valor>
</item>
</itens>
<parcelas>
<parcela>
    **<nrodias>${numeroDias}</nrodias>**
    **<valor>${valor}</valor>**
    <obs>Uma observação qualquer...</obs>
    **<idformapagamento>${formaPagamento}</idformapagamento>**
</parcela>
</parcelas>
<transporte>
<transportador>Meu transportador 1</transportador>
<freteporconta>R</freteporconta>
<qtdvolumes>1</qtdvolumes>
<frete>16.0</frete>
</transporte>
</pedidocompra>`

    console.log(xml)
}

printXML(1, '01/01/2020', 'você mesmo', 'Alguma compra aleatória', 1, 30, 500.00, 'cartão')