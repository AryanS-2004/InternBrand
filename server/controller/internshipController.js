const asyncHandler = require('express-async-handler');
const Internship = require("../models/internshipModel");


const getInternships = asyncHandler(async (req, res) => {
    try {
        const internships = await Internship.find({});
        res.status(200).json(internships);
    } catch (err) {
        res.status(500).send(err.message);
    }
})

const createInternships = asyncHandler(async (req, res) => {
    const {
        company,
        title,
        category,
        duration,
        experience,
        isPaid,
        lowerBound,
        upperBound,
        location,
        posted,
        endsIn,
        openPositions,
        applicants,
        isFullTime,
        isInOffice,
        isBookmarked,
        pic,
        skills,
        aboutUs,
        requirements,
        responsibilities,
    } = req.body;
    if (!company || !title || !category || !duration || !experience || !upperBound || !lowerBound || !location || !openPositions || !skills || !aboutUs || !requirements || !responsibilities) {
        res.status(400).send({message: "please enter all the fileds."});
    }
    try {
        const internship = await Internship.create({
            company,
            title,
            category,
            duration,
            experience,
            stipend: {
                isPaid,
                upperBound,
                lowerBound,
            },
            location,
            posted,
            endsIn,
            openPositions,
            applicants,
            isFullTime,
            isInOffice,
            isBookmarked,
            pic,
            skills,
            aboutUs,
            requirements,
            responsibilities
        })
        res.status(200).send(internship);
    } catch (err) {
        res.status(500).send(err.message);
    }
})

const updateBookmark = asyncHandler(async (req, res) => {
    const internshipId = req.params.id;
    const status = req.body.status;
    let isBookmarked = false;
    if (status === "true") {
        isBookmarked = true;
    }
    try {
        const updatedInternship = await Internship.findByIdAndUpdate(
            internshipId,
            {
                isBookmarked,
            },
            {
                new: true,
            }
        );
        res.status(200).send(updatedInternship);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

const applyInternship = asyncHandler(async (req, res) => {
    try {

    } catch (err) {
        res.status(500).send(err.message);
    }
})

const withdrawInternship = asyncHandler(async (req, res) => {
    try {

    } catch (err) {
        res.status(500).send(err.message);
    }
})

module.exports = {getInternships, createInternships, applyInternship, withdrawInternship, updateBookmark}