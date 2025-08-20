import styles from '../styles/Footer.module.css';

const iconLinkMapping: { [key: string]: string } = {
  'mail.png': 'mailto:selenalatchman8@gmail.com',
  'linkedin.png': 'https://www.linkedin.com/in/selena-lourenco/',
  'github.png': 'https://github.com/SelenaJL',
  'instagram.png': 'https://www.instagram.com/selsfosterdiaries/',
  'youtube.png': 'https://www.youtube.com/@selenajazz'
};

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.icons}>
        {Object.keys(iconLinkMapping).map((icon) => (
          <a
            key={icon}
            href={iconLinkMapping[icon]}
            target="_blank"
            rel="noopener noreferrer"
            title={icon === 'mail.png' ? 'Once a Latchman, always a Latchman 😉' : undefined} // easter egg!
          >
            <img src={`/icons/${icon}`} alt={icon} className={styles.icon} />
          </a>
        ))}
      </div>
    </footer>
  );
};
