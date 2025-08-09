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
  text: `You've landed on my personal website which I built to tell my story. \
  I'm a ${age} year old software developer who lives in Toronto, Canada. \
  I've got a big heart and bigger personality which you can read about below. \
  I believe that "to be loved is to be known" so the truest way to love myself is to continuously learn about myself. \
  From my education and work experience, to causes I care deeply about and volunteer for, to hobbies and projects that spark my joy... it's all here! \
  I hope you enjoy learning about me and reach out so I can have the honour of learning about you too.`,
  image: '/memories/profile.jpg',
  buttons: [
    { logo: '/logos/linkedin.png', text: 'Connect with me', link: 'https://www.linkedin.com/in/selena-lourenco/' },
  ],
};

const cardsContent = [
  {
    title: 'Helper',
    text: 'My Enneagram type is the helper (2) which means I\'m motivated by a desire to be needed and loved. \
    I\'m compassionate and generous at my best but can sometimes be a people-pleaser. \
    I thrive when I\'m supporting others, building strong relationships, and making a difference.',
    button: { logo: '/logos/enneagram.png', text: 'Learn about Enneagram', link: 'https://www.enneagraminstitute.com/' },
  },
  {
    title: 'Campaigner',
    text: 'My Myers-Briggs type is ENFP (Extraverted, Intuitive, Feeling, Perceiving) or the campaigner which means I\'m motivated by authentic connection. \
    I\'m enthusiastic and innovative at my best but can sometimes be impulsive. \
    I thrive when I\’m working on creative and mission-driven projects.',
    button: { logo: '/logos/myers-briggs.png', text: 'Learn about Myers-Briggs', link: 'https://www.16personalities.com/' },
  },
  {
    title: 'Influencer',
    text: 'My DiSC style is the influencer which means I\'m motivated by relationships and recognition. \
    I\'m charismatic and persuasive at my best but can sometimes overcommit. \
    I thrive in dynamic, social environments and roles that require strong communication and leadership skills.',
    button: { logo: '/logos/disc.png', text: 'Learn about DiSC', link: 'https://www.discprofile.com/disc-styles' },
  },
  {
    title: 'Explorer',
    text: 'My play personality is the explorer which means I\'m motivated by novelty and growth. \
    I\'m adventurous and open-minded at my best but can sometimes get distracted. \
    I thrive when I\'m free to experiment with ideas, follow my curiosity, ask questions, and express myself.',
    button: { logo: '/logos/play.png', text: 'Learn about play', link: 'https://nifplay.org/what-is-play/play-personalities/' },
  },
];

export const AboutMe = () => <Page mainCardContent={mainCardContent} cardsContent={cardsContent} />;
