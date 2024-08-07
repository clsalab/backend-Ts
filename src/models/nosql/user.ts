import { Schema, Types, model, } from "mongoose";
import { User } from "../../interfaces/user.interface";
const mongooseDelete = require("mongoose-delete");


const UserSchema = new Schema<User>(
    {
        username: { type: String, required: true },
        useremail: { type: String, required: true, unique: true },
        userpassword: { type: String, required: true, select: false },
        userestado: { type: String, enum: ["activo", "inactivo"], default: "activo" },
        userroles: { type: [{ type: String, enum: ["user", "student", "teacher", "admin"] }], default: ["user"] },
        tipoDocumento: { type: String, required: true },
        fechaNacimiento: { type: Date, required: true },
        numeroDocumento: { type: Number, required: true, unique: true },
        documentoIdentidad: { type: String }, // Cambiar por el tipo de dato correcto para guardar archivos en la base de datos
        paisExpedicion: { type: String, required: true },
        departamentoExpedicion: { type: String, required: true },
        municipioExpedicion: { type: String, required: true },
        fechaExpedicion: { type: Date, required: true },
        nombres: { type: String, required: true },
        apellidos: { type: String, required: true },
        sexo: { type: String, required: true },
        direccion: { type: String, required: true },
        celular: { type: String, required: true },
        paisNacimiento: { type: String, required: true },
        departamentoNacimiento: { type: String, required: true },
        municipioNacimiento: { type: String, required: true },
        estrato: { type: Number, required: true },
        cargo: { type: String },
        tituloAcademico: { type: String },
        perfilLaboral: { type: String },
        anoExperiencia: { type: String },
        descripcionStudent: { type: String },
        estadoStudiante: { type: String },
        ficha: { type:Types.ObjectId, ref: 'fichas', autopopulate: true },

    },
    {
        versionKey: false,
        timestamps: true,
    }
);

UserSchema.plugin(require('mongoose-autopopulate'));
UserSchema.plugin(mongooseDelete, { deleted: true });

const usersModel = model<User>('users', UserSchema);

export default usersModel;
