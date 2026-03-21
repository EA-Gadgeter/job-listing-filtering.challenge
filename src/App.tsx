import { Header } from "./components/Header";
import { FilterBar } from "./components/FilterBar/FilterBar";
import { JobCard } from "./components/JobCard/JobCard";
import { useJobFilters } from "./hooks/useJobFilters";
import mockData from "./mock/data.json";
import type { Job } from "./types/job";
import styles from "./App.module.css";

const jobsData: Job[] = mockData;

function App() {
  const { filteredJobs, activeFilters, addFilter, removeFilter, clearFilters } = useJobFilters(jobsData);

  return (
    <>
      <Header />
      <main className={styles.mainContainer}>
        {/* The FilterBar handles its own negative margin/transform to overlap the header */}
        <FilterBar 
          filters={activeFilters} 
          onRemove={removeFilter}
          onClear={clearFilters}
        />

        <ul className={styles.jobList}>
          {filteredJobs.map((job) => (
            <JobCard key={job.id} job={job} onAddFilter={addFilter} />
          ))}
        </ul>
      </main>
    </>
  );
}

export default App;
