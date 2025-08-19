import { Link } from 'react-router-dom';
import cardStyles from '../styles/Card.module.css';
import styles from '../styles/ClickableCard.module.css';

interface ClickableCardProps {
  title: string;
  text: string;
  route: string;
}

export const ClickableCard = ({ title, text, route }: ClickableCardProps) => {
  return (
    <Link to={route} className={`${cardStyles.card} ${styles.clickableCard}`}>
      <div className={styles.titleContainer}>
        <img src="/icons/arrow.png" alt="Arrow" className={styles.arrowIcon} />
        <h3 className={cardStyles.title}>{title}</h3>
      </div>
      <p
        className={cardStyles.text}
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </Link>
  );
};
