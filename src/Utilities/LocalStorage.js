const getJobsFromLs = () => {
  const storedJobs = localStorage.getItem("jobs");
  if (storedJobs) {
    return JSON.parse(storedJobs);
  }
  return [];
};
const addToLs = (job) => {
  // const savedJobs = [];
  const jobs = getJobsFromLs();
  jobs.push(job);
  saveToLs(jobs);
};
const saveToLs = (jobs) => {
  localStorage.setItem("jobs", JSON.stringify(jobs));
};

export { getJobsFromLs, addToLs };
