// JobDetailPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function JobDetailPage({ match }) {
    const [job, setJob] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:5000/api/jobs/${match.params.id}`)
            .then(response => setJob(response.data))
            .catch(error => console.error(error));
    }, [match.params.id]);

    return (
        <div>
            <h1>{job.title}</h1>
            <p>{job.company}</p>
            <p>{job.location}</p>
            <p>{job.description}</p>
            <p>{job.requirements}</p>
            <a href={job.applyLink} className="btn">Apply Now</a>
        </div>
    );
}

export default JobDetailPage;
