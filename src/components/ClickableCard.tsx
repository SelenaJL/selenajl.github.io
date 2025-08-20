import { Link } from 'react-router-dom';
import cardStyles from '../styles/Card.module.css';
import styles from '../styles/ClickableCard.module.css';

interface ClickableCardProps {
  title: string;
  text: string;
  route: string;
  photoStack?: string[];
}

export const ClickableCard = ({ title, text, route, photoStack }: ClickableCardProps) => {
  return (
    <Link to={route} className={`${cardStyles.card} ${styles.clickableCard}`}>
      <div className={styles.contentWrapper}>
        <div className={styles.textAndTitleContainer}>
          <div className={styles.titleContainer}>
            <img src="/icons/arrow.png" alt="Arrow" className={styles.arrowIcon} />
            <h3 className={cardStyles.title}>{title}</h3>
          </div>
          <p
            className={cardStyles.text}
            dangerouslySetInnerHTML={{ __html: text }}
          />
        </div>
        {photoStack && photoStack.length > 0 && (
          <div className={styles.photoStack}>
            {photoStack.map((photo, index) => (
              <img
                key={index}
                src={photo}
                alt={`Stack photo ${index + 1}`}
                className={styles.stackPhoto}
                style={{ zIndex: photoStack.length - index }}
              />
            ))}
          </div>
        )}
      </div>
    </Link>
  );
};
