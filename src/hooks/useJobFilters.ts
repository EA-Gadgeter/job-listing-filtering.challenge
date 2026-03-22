import { useState, useMemo } from 'react';
import type { Job } from '../types/job';

export function useJobFilters(initialJobs: Job[]) {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const addFilter = (filter: string) => {
    setActiveFilters((prev) => {
      if (prev.includes(filter)) return prev;
      return [...prev, filter];
    });
  };

  const removeFilter = (filter: string) => {
    setActiveFilters((prev) => prev.filter((f) => f !== filter));
  };

  const clearFilters = () => {
    setActiveFilters([]);
  };

  const filteredJobs = useMemo(() => {
    if (activeFilters.length === 0) {
      return initialJobs;
    }
    
    // Implementar la lógica para cruzar `role`, `level`, `languages` y `tools`
    return initialJobs.filter((job) => {
      // We extract all the tags that can be used for filtering from the job posting
      const jobTags = [job.role, job.level, ...job.languages, ...job.tools];
      
      // Temporal Set for O(1) lookups when checking if a job contains all active filters
      const tagSet = new Set(jobTags);
      
      // We check if every active filter is present in the job's tags
      return activeFilters.every((filter) => tagSet.has(filter));
    });
  }, [initialJobs, activeFilters]);

  return {
    activeFilters,
    filteredJobs,
    addFilter,
    removeFilter,
    clearFilters
  };
}
