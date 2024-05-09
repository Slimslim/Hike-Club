import mongoose from 'mongoose';

const hikeSchema = new mongoose.Schema(
    {
        hike_name: {
            type: String,
            required: [true, 'Hike name is required'],
            minlength: [3, 'Hike name must be at least 3 characters long'],
            maxlength: [255, 'Hike name cannot exceed 255 characters'],
        },
        location: {
            type: String,
            required: [true, 'Location is required'],
            minlength: [3, 'Location must be at least 3 characters long'],
            maxlength: [255, 'Location cannot exceed 255 characters'],
        },
        distance: {
            type: Number,
            required: [true, 'Distance is required'],
            min: [0, 'Distance cannot be negative'],
        },
        difficulty: {
            type: String,
            enum: ['very easy', 'easy', 'moderate', 'difficult', 'very difficult'],
            default: 'moderate',
        },
        amenities: {
            type: [String], 
            enum: ["bathroom", "water", "parking", "dog-friendly", "picnic areas", "scenic viewpoints"],
            required: [true, 'Please select at least one amenity'],
            default: [] 
        },
        
        rating: {
            type: Number,
            min: [0, 'Rating must be between 0 and 5'],
            max: [5, 'Rating must be between 0 and 5'],
        },
        description: {
            type: String,
            maxlength: [1000, 'Description cannot exceed 1000 characters'],
        },
        date: {
            type: Date,
            default: Date.now
        }
    },
    { timestamps: true }
);

const Hike = mongoose.model('Hike', hikeSchema);

export default Hike;
