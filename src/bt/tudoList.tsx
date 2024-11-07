import { useState } from "react";

interface Todo {
  text: string;
}

function TodoList() {
  const [job, setJob] = useState<string>('');
  const [jobs, setJobs] = useState<Todo[]>(() => {
    const storageJob = localStorage.getItem('job');
    try {
      return storageJob ? JSON.parse(storageJob) : [];
    } catch (error) {
      console.error('Error parsing localStorage:', error);
      return [];
    } 
  });

  const handleSumit = () => {
    if (job.trim()) {
      setJobs(prevJobs => [...prevJobs, { text: job }]);
      setJob('');
    } else {
      console.warn('Please enter a todo item');
    }
  };

  return (
    <div style={{ padding: 32 }}>
      <input
        value={job}
        onChange={e => setJob(e.target.value)}
      />
      <button onClick={handleSumit}>ADD</button>

      <ul>
        {jobs.map((job, index) => (
          <li key={index}>{job.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;