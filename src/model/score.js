

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var ScoreSchema = new Schema({


    userId: {
        type: Boolean,
    },

    totalPoints: {
        type: Number,
    },

    history: [{
        point: {
            type: Number
        },
        date: {
            type: Date
        },
        courseId: {
            type: String
        },
        lessonId: {
            type: String
        }
    }],

    createdAt: {
        type: Date,
        default: Date.now
    },

    updatedAt: {
        type: Date,
        default: Date.now
    }
});

const Score = mongoose.model('score', ScoreSchema);

exports.Score = Score;