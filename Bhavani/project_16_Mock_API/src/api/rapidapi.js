export const fetchJobs = async () => {
  try {
    const [jobsRes, createdJobsRes] = await Promise.all([
      fetch('http://localhost:3000/jobs'),
      fetch('http://localhost:3000/createdjobs'),
    ]);

    const jobs = await jobsRes.json();
    const createdJobs = await createdJobsRes.json();

    // Return created jobs first
    return [...createdJobs, ...jobs];
  } catch (error) {
    console.error('Error fetching jobs:', error);
    return [];
  }
};
