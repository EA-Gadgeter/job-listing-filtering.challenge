import styles from './FilterBar.module.css';

interface FilterBarProps {
  filters: string[];
  onRemove: (filter: string) => void;
  onClear: () => void;
}

export const FilterBar = ({ filters, onRemove, onClear }: FilterBarProps) => {
  // If there are no active filters, we don't render the component
  if (filters.length === 0) return null;

  // Let's resolve the remove icon path dynamically like we did for the JobCards
  const removeIconUrl = new URL('../../assets/images/icon-remove.svg', import.meta.url).href;

  return (
    <div className={styles.container}>
      <ul className={styles.filterList}>
        {filters.map((filter) => (
          <li key={filter} className={styles.filterItem}>
            <span className={styles.filterName}>{filter}</span>
            <button
              type="button"
              className={styles.removeButton}
              onClick={() => onRemove(filter)}
              aria-label={`Remove ${filter} filter`}
            >
              <img src={removeIconUrl} alt="" aria-hidden="true" />
            </button>
          </li>
        ))}
      </ul>
      
      <button 
        type="button" 
        className={styles.clearButton} 
        onClick={onClear}
      >
        Clear
      </button>
    </div>
  );
};
