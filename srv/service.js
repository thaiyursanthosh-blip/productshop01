const cds = require('@sap/cds')

module.exports = cds.service.impl(async function(srv){

    srv.on('printhelloworld', req => {
        console.log (req.data) //Print the request coming from server
        return `${req.data.input} World`
        })
})