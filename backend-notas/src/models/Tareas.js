import { Schema, model } from 'mongoose';

const tareasSchema = new Schema(
    {
        nombre:{
            type: String
        },
        descripcion:{
            type: String
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
);

export default model("Tareas", tareasSchema);