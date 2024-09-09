// HomePage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function HomePage() {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/jobs')
            .then(response => setJobs(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h1>Find your Dream Job</h1>
            <input type="text" placeholder="Search for jobs..." />
            <div>
                {jobs.map(job => (
                    <div key={job._id}>
                        <h3>{job.title}</h3>
                        <p>{job.company}</p>
                        <p>{job.location}</p>
                        <a href={`/jobs/${job._id}`} className="btn">View Details</a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HomePage;
