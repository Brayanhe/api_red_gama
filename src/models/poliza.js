import mongoose from 'mongoose'

const polizaShema = mongoose.Schema({
    nombre:{
        type:String,
        required:true
    },
    tipoCubrimiento:{
        type:String,
        required:true
    },
    inicioVigencia:{
        type:Date,
        required:true
    },
    periodo:{
        type:Number,
        required:true
    },
    precio:{
        type:Number,
        required:true
    },
    tipoRiesgo:{
        type:String,
        required:true

    }

},{
    timestamps:true
})

const Poliza = mongoose.model('Poliza',polizaShema)

export default Poliza; 