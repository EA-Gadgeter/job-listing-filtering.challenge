import styles from './JobCard.module.css';
import type { Job } from '../../types/job';

interface JobCardProps {
  job: Job;
  onAddFilter: (filter: string) => void;
}

export const JobCard = ({ job, onAddFilter }: JobCardProps) => {
  // Mergin all tags that user can click to filter
  const tags = [job.role, job.level, ...job.languages, ...job.tools];

  // We resolve the logo URL dynamically using Vite's import.meta.url to ensure it works in both development and production builds
  const logoUrl = new URL(`../../assets${job.logo}`, import.meta.url).href;

  return (
    <li className={`${styles.card} ${job.featured ? styles.cardFeatured : ''}`}>
      <article className={styles.jobArticle}>
        <div className={styles.mainInfoWrapper}>
          <figure className={styles.logoContainer}>
            <img src={logoUrl} alt={`${job.company} Logo`} className={styles.logo} />
          </figure>

          <div className={styles.infoContainer}>
            <div className={styles.companyRow}>
              <span className={styles.companyName}>{job.company}</span>
              {job.new && <span className={styles.badgeNew}>NEW!</span>}
              {job.featured && <span className={styles.badgeFeatured}>FEATURED</span>}
            </div>

            <h2 className={styles.position}>{job.position}</h2>

            <p className={styles.details}>
              {job.postedAt} <span>&bull;</span> {job.contract} <span>&bull;</span> {job.location}
            </p>
          </div>
        </div>

        <hr className={styles.divider} />

        <ul className={styles.tagsContainer}>
          {tags.map((tag) => (
            <li key={tag}>
              <button
                type="button"
                className={styles.tagButton}
                onClick={() => onAddFilter(tag)}
              >
                {tag}
              </button>
            </li>
          ))}
        </ul>
      </article>
    </li>
  );
};
