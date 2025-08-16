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

const clickableCardsContent = [
  {
    title: 'Education',
    text: 'From advanced English and theatre to a Bachelor of Computer Science and autonomous vehicles to student health initiatives...',
    route: '/education',
  },
  {
    title: 'Work Experience',
    text: 'From startups to Silicon Valley, healthcare to e-commerce, plus my very own retrospective and domain-driven design templates...',
    route: '/work',
  },
  {
    title: 'Volunteer History',
    text: 'From mentoring girls in STEM to speaking at conferences to teaching employees transitioning to engineering how to code...',
    route: '/volunteer',
  },
  {
    title: 'Animal Rescue',
    text: 'From fostering 23 cats to socializing and providing medical care to facilitating adoptions with my local shelters...',
    route: '/animals',
  },
  {
    title: 'Hobbies',
    text: 'From playing the piano and writing songs to running for children\'s hospitals to experimenting with art and cooking...',
    route: '/hobbies',
  },
  {
    title: 'Projects',
    text: 'From deploying this website to building a Taylor Swift song ranking app as well as an all-in-one wedding planning tool...',
    route: '/projects',
  },
];

export const AboutMe = () => <Page mainCardContent={mainCardContent} clickableCardsContent={clickableCardsContent} />;
