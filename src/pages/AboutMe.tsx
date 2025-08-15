import { Page } from './Page';

const birthDate = new Date('1997-11-03');
const birthMonth = birthDate.getMonth();
const currentDate = new Date();
const currentMonth = currentDate.getMonth();
let age = currentDate.getFullYear() - birthDate.getFullYear();
if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDate.getDay() < birthDate.getDay())) {
  age--;
}

const mainCardContent = {
  title: "It's Me, Hi!",
  text: `I'm a ${age} year old software developer who lives in Toronto, Canada with my husband and foster cats. \
  I thrive on connection and creativity which makes sense given that \
  I'm a type 2 or "helper" on the <a href="https://www.enneagraminstitute.com/">Enneagram</a> scale, \
  an ENFP or "campainger" on the <a href="https://www.16personalities.com/">Myers-Brigg</a> scale, \
  an "influencer" on the <a href="https://www.discprofile.com/disc-styles">DiSC</a> scale, \
  and an "explorer" on the <a href="https://nifplay.org/what-is-play/play-personalities/">play personalities</a> scale. \
  I hope you enjoy learning more about my story and reach out so I can have the honour of learning about yours too.`,
  image: '/memories/profile.jpg',
  buttons: [
    { logo: '/logos/linkedin.png', text: 'Connect with me', link: 'https://www.linkedin.com/in/selena-lourenco/' },
  ],
};

const cardsContent = [
  {
    text: 'Theatre, mental health, autonomous cars...',
    // image: '/memories/math.jpg',
    title: '',
    button: { text: 'See my education', link: '/education' },
  },
  {
    text: 'Startups, guilds, retrospectives...',
    // image: '/memories/shopify-fulltime.jpg',
    title: '',
    button: { text: 'See my work experience', link: '/work' },
  },
  {
    text: 'Mentoring, teaching, public speaking...',
    // image: '/memories/women.jpg',
    title: '',
    button: { text: 'See my volunteer history', link: '/volunteer' },
  },
  {
    text: 'Animal rescue, foster care, adoption...',
    // image: '/cats/cat-1.jpg',
    title: '',
    button: { text: 'See my cats', link: '/animals' },
  },
  {
    text: 'Songwriting, charity runs, arts and crafts...',
    // image: '/memories/mrr-shirt.jpg',
    title: '',
    button: { text: 'See my hobbies', link: '/hobbies' },
  },
  {
    text: 'Weddings, Taylor Swift, hackathons...',
    // image: '/memories/eras-tour.jpg',
    title: '',
    button: { text: 'See my projects', link: '/projects' },
  },
];

export const AboutMe = () => <Page mainCardContent={mainCardContent} cardsContent={cardsContent} />;
