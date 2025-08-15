
import styles from '../styles/Button.module.css';

interface ButtonProps {
  logo?: string;
  text: string;
  link: string;
}

export const Button = ({ logo, text, link }: ButtonProps) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className={styles.button}>
      {logo && <img src={logo} alt={text} className={styles.buttonLogo} />}
      <span>{text}</span>
    </a>
  );
};
