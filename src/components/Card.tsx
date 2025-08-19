import { Link } from 'react-router-dom';
import styles from '../styles/Card.module.css';

interface CardProps {
  title: string;
  text: string;
  image: string;
  date?: string;
  button?: { logo?: string; text: string; link: string };
}

export const Card = ({ title, text, image, date, button }: CardProps) => {
  const titleContainerClasses = [styles.titleContainer];
  if (image) titleContainerClasses.push(styles.withImage);

  const cardContent = (
    <>
      {image && (
        <div className={styles.imageContainer}>
          <img src={image} alt={title} className={styles.image} />
        </div>
      )}
      <div className={titleContainerClasses.join(' ')}>
        {button?.logo && (
          <img src={button.logo} alt={`${title} logo`} className={styles.titleLogo} />
        )}
        <h3 className={styles.title}>{title}</h3>
      </div>
      <div
        className={styles.text}
        dangerouslySetInnerHTML={{ __html: text }}
      />
      {date && <span className={styles.date}>{date}</span>}
    </>
  );

  if (button) {
    return (
      <Link to={button.link} className={`${styles.card} ${styles.clickableCardLink}`}>
        {cardContent}
      </Link>
    );
  } else {
    return (
      <div className={styles.card}>
        {cardContent}
      </div>
    );
  }
};