import mongoose from "mongoose";

const profileSchema = new mongoose.Schema(
    {
        bio:{
            type: String,
            default: "N/A"
        },
        user:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required:[true, 'User id is required']
        },
        personalInfo: {
            DOB:{
                type: String,
                default: "N/A"
            }
        },
        lookingFor: {
            type: String,
            enum: ["Male", "Female"],
            default: "N/A"
        },
        intrest:[
            {
                type: String,
                trim: true,
                lowercase: true,
                default: "N/A"
            }
        ],
        relationship: {
            type: String,
            enum: ['Married', 'Single', 'In a relationship', 'Divorced'],
            default: "N/A"
        },
        education: {
            type: String,
            enum: ['Elementry School', 'High School', 'Some College', 'Bachelor Degree', 'Ph.D/Postdoctoral'],
            default: "N/A"
        },
        height:{
            type: Number,
            default: "N/A"
        },
        eyeColor:{
            type: String,
            default: "N/A"
        },
        hairColor:{
            type: String,
            default: "N/A"
        },
        info:{
            type:String,
            trim: true
        },
        favMusic:{
            type: String,
            trim: true
        },
        favTvShows:[
            {
                type: String,
                trim: true
            }
        ],
        favMovie: [
            {
                type: String,
                trim: true
            }
        ],
        favBooks: [
            {
                type: String,
                trim: true
            }
        ]
    },
    {
        timestamps: true
    }
);

export const Profile = mongoose.model('Profile', profileSchema);