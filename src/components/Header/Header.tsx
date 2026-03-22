import styles from "./Header.module.css"

export const Header = () => {
  return (
    <header
      className={styles.header}
    >
      <picture>
        <source media="(min-width: 768px)" srcSet={`${import.meta.env.BASE_URL}bg-header-desktop.svg`} />
        <img
          alt="Background Image"
          src={`${import.meta.env.BASE_URL}bg-header-mobile.svg`}
          className={styles.bg_image}
        />
      </picture>
    </header>
  );
};
