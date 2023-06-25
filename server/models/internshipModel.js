const mongoose = require('mongoose');

const InternshipSchema = new mongoose.Schema(
    {
        company: {
            type: String,
        },
        title: {
            type: String,
        },
        category: {
            type: String,
        },
        duration: {
            type: String,
        },
        experience: {
            type: String,
        },
        stipend: {
            isPaid: {
                type: Boolean,
                default: true,
            },
            lowerBound: {
                type: Number,
            },
            upperBound: {
                type: Number,
            },
        },
        location: {
            type: String,
        },
        posted: {
            type: String,
        },
        endsIn: {
            type: String,
        },
        openPositions: {
            type: String,
        },
        // applicants: [
        //     {
        //         type: mongoose.Schema.Types.ObjectId,
        //         ref: "User"
        //     }
        // ],
        // selected: [
        //     {
        //         type: mongoose.Schema.Types.ObjectId,
        //         ref: "User"
        //     }
        // ],
        applicants: {
            type: Number
        },
        selected: {
            type: Number
        },
        isFullTime: {
            type: Boolean,
            default: false,
        },
        isInOffice: {
            type: Boolean,
            default: false,
        },
        isBookmarked: {
            type: Boolean,
            default: false,
        },
        pic: {
            type: String
        },
        skills: [
            {
                type: String,
            }
        ],
        aboutUs: {
            type: String,
        },
        requirements: [
            {
                type: String
            }
        ],
        responsibilities: [
            {
                type: String
            }
        ],

    },
    {
        timestamps: true
    }
);


const Internship = mongoose.model('Internship', InternshipSchema);

module.exports = Internship;