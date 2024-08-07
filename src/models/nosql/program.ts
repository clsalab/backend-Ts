import mongoose, { Schema, model } from "mongoose";
import { Program } from "../../interfaces/programa.interface";
import MongooseDelete from "mongoose-delete";




const ProgramSchema = new Schema<Program>(
    {   
        codigoPrograma: { type: Number, required: true,  unique: true},
        nombrePrograma: { type: String, required: true },
        tipoPrograma:  { type: String, enum: ["Técnico", "Curso"], default: "Técnico" },
        intensidadHoraPrograma: { type: String, required: true },
        descripcionPrograma: { type: String, required: false },
    },
    {
        timestamps: true,
        versionKey: false
    }
);

ProgramSchema.plugin(require('mongoose-autopopulate'));


ProgramSchema.plugin(MongooseDelete, { overrideMethods: "all" });


const programModel = model<Program>('programas', ProgramSchema);

export default programModel;
