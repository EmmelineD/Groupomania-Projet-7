//importation de mongoose pour pouvoir enregistrer les données user dans la BDD
const mongoose = require("mongoose")

//importation du plugin (complément de "unique:true" double sécuriter pour s'assurer qu'un mail ne peut pas être utiliser plusieurs fois)
const uniqueValidator = require('mongoose-unique-validator');

const UserSchema = new mongoose.Schema({
    username :{
        type:String,
        require:true,
        min:3,
        max:40,
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        validate: {
            validator: function(v) {
                return /^\w+([.]?\w+)*@groupomania.com/.test(v);
            },
            message: "Mail non valide"
        },
        required: [true, "Email required"],
    },
    password: { 
        type: String,
        required: true,
    },
    profilePicture: {
        type: String,
        default: "",
    },
    coverPicture: {
        type: String,
        default: "",
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    desc: {
        type: String,
        max: 50,
    },
    city: {
        type: String,
        max: 50,
    },
},
{timestamps:true}
);

//utilisation du plugin uniqueValidator
UserSchema.plugin(uniqueValidator);

//exportation du model User
module.exports = mongoose.model('User', UserSchema);