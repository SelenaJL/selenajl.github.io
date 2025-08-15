import { Button } from './Button';
import styles from '../styles/MainCard.module.css';

interface MainCardProps {
  title: string;
  text: string;
  image?: string;
  buttons?: { logo?: string; text: string; link: string }[];
}

export const MainCard = ({ title, text, image, buttons }: MainCardProps) => {
  

  return (
    <div className={styles.mainCard}>
      <div className={image ? styles.contentContainer : ''}>
        {image && <img src={image} alt={title} className={styles.image} />}
        <div className={styles.textAndButtonContainer}>
          <h2 className={styles.title}>{title}</h2>
          <div
            className={styles.text}
            dangerouslySetInnerHTML={{ __html: text }}
          />
          {buttons && buttons.length > 0 && (
            <div className={styles.buttonContainer}>
              {buttons.map((button, index) => (
                <Button key={index} {...button} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
