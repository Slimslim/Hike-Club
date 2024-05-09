import { model, Schema } from "mongoose";

const HikeSchema = new Schema(
    {
        hike_name: {
            type: String,
            required: [true, "The name of the Hike is required."],
        },
        location: {
            type: String,
            required: [true, "The location of the Hike is required."],
        },
        distance: {
            type: Number,
            required: [true, "The distance of the hike is required."],
        },
        difficulty: {
            type: String,
            enum: ["very_easy", "easy", "medium", "hard", "very_hard"],
            required: [true, "The difficulty is required."],
        },
        amenities: {
            type: [String],
            validate: {
                validator: function (value) {
                    // Only allowed these amenities listed
                    return value.every((amenity) =>
                        [
                            "bathroom",
                            "parking",
                            "water",
                            "dog-friendly",
                            "picnic areas",
                            "scenic viewpoints",
                        ].includes(amenity)
                    );
                },
                message: (props) =>
                    `${props.value} is not a valid amenity name`,
            },
        },
        ratings: {
            type: Number,
            required: [true, "The ratings number is required."],
        },
        description: {
            type: String,
        },
        createdBy: {
            type: String,
            required: [true, "CreatedBy field is required."],
        },
    },
    { timestamps: true }
);

const Hike = model("Hike", HikeSchema);

export default Hike;
