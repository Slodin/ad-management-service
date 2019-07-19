import mongoose from 'mongoose';

let advertisementSchema = new mongoose.Schema({
    userId: {
        type: String,
        default: 'legacy'
    },
    identifier: {
        type: String,
        unique: true
    },
    mediaType: Number, //0 = image, 1 = video
    mediaUrl: String,
    adLink: String,
    createdAt: {
        type: Date,
        default: Date.now,
        immutable: true
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

let Advertisements = mongoose.model('Advertisements', advertisementSchema);

export default Advertisements;