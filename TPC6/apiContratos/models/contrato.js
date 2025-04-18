var mongoose = require('mongoose')

var contratosSchema = new mongoose.Schema({
    _id : {type : Number, require : true},
    nAnuncio: String,
    tipoProcedimento: String,
    objectoContrato: String,
    DataPublicacao: String,
    DataCelebrcaoContrato: String,
    precoContratual: Number,
    prazoExecucao: String,
    NIPC_entidade_comunicante: Number,
    entidade_comunicante: String,
    fundamentacao: String,
}, {versionKey : false})

module.exports = mongoose.model('contrato', contratosSchema)