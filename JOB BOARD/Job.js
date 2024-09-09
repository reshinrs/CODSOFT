// models/Job.js
const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    title: { type: String, required: true },
    company: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true },
    requirements: { type: String, required: true },
    applyLink: { type: String, required: true }
});

const Job = mongoose.model('Job', jobSchema);
module.exports = Job;

// routes/jobs.js
const express = require('express');
const router = express.Router();
const Job = require('../models/Job');

// GET all jobs
router.get('/', async (req, res) => {
    try {
        const jobs = await Job.find();
        res.json(jobs);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET a specific job by ID
router.get('/:id', async (req, res) => {
    try {
        const job = await Job.findById(req.params.id);
        res.json(job);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST a new job
router.post('/', async (req, res) => {
    const job = new Job({
        title: req.body.title,
        company: req.body.company,
        location: req.body.location,
        description: req.body.description,
        requirements: req.body.requirements,
        applyLink: req.body.applyLink
    });

    try {
        const newJob = await job.save();
        res.status(201).json(newJob);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
