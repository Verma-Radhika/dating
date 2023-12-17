import mongoose from "mongoose";

const imageSchema = new mongoose.Schema(
    {
        image:{

        },
        likes: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
                required: true
            }
        ],
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        }
    },
    {
        timestamps: true
    }
);

export const Image = mongoose.model('Image', imageSchema);