import { model, Schema } from "mongoose";

const HikeSchema = new Schema(
    {
        hike_name: {
            type: String,
            required: [
                true,
                "The name of the Hike is required."
            ]
        },
        location: {
            type: String,
            required: [
                true,
                "The location of the Hike is required."
            ]
        },
        distance: {
            type: Number,
            required: [
                true,
                "The distance of the hike is required."
            ]
        },
        difficulty: {
            type: String,
            enum: ['very_easy', 'easy', 'medium', 'hard', 'very_hard'],
            required: [
                true,
                "The difficulty is required."
            ]
        },
        facilities: {
            type: Number,
            required: [
                true,
                "The count of facilities is required."
            ]
        },
        ratings: {
            type: Number,
            required: [
                true,
                "The ratings number is required."
            ]
        }
    },
    { timestamps: true }
);

const Hike = model("Hike", HikeSchema);

export default Hike;