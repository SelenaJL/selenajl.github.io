import { Card } from '../components/Card';
import { ClickableCard } from '../components/ClickableCard';
import { MainCard } from '../components/MainCard';
import styles from '../styles/Page.module.css';

interface PageProps {
  mainCardContent: { 
    title: string;
    text: string;
    image?: string;
    buttons?: { logo?: string; text: string; link: string }[] };
  cardsContent?: {
    title: string;
    text: string;
    image: string;
    date?: string;
    button?: { logo?: string; text: string; link: string };
  }[];
  clickableCardsContent?: {
    title: string;
    text: string;
    route: string;
  }[];
}

export const Page = ({ mainCardContent, cardsContent, clickableCardsContent }: PageProps) => {
  return (
    <main className={styles.page}>
      {mainCardContent && (
        <MainCard title={mainCardContent.title} text={mainCardContent.text} image={mainCardContent.image} buttons={mainCardContent.buttons} />
      )}
      <div className={styles.grid}>
        {cardsContent && cardsContent.map((card, index) => (
          <Card key={`card-${index}`} {...card} />
        ))}
      </div>
      <div className={styles.grid}>
        {clickableCardsContent && clickableCardsContent.map((card, index) => (
          <ClickableCard key={`clickable-card-${index}`} {...card} />
        ))}
      </div>
    </main>
  );
};
