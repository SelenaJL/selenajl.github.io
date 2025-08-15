import { Card } from '../components/Card';
import { MainCard } from '../components/MainCard';
import styles from '../styles/Page.module.css';

interface PageProps {
  mainCardContent?: { 
    title: string;
    text: string;
    image?: string;
    buttons?: { logo?: string; text: string; link: string }[] };
  cardsContent: {
    title: string;
    text: string;
    image?: string;
    date?: string;
    button?: { logo?: string; text: string; link: string };
  }[];
}

export const Page = ({ cardsContent, mainCardContent }: PageProps) => {
  return (
    <main className={styles.page}>
      {mainCardContent && (
        <MainCard title={mainCardContent.title} text={mainCardContent.text} image={mainCardContent.image} buttons={mainCardContent.buttons} />
      )}
      <div className={styles.grid}>
        {cardsContent.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </main>
  );
};
