import { Page } from './Page';

const mainCardContent = {
  title: "Welcome to my world!",
  text: `I'm a software developer who lives in Toronto, Canada with my husband and foster cats. \
  I thrive on connection and creativity which makes sense given that \
  I'm a type 2 or "helper" on the <a href="https://www.enneagraminstitute.com/">Enneagram</a> scale, \
  an ENFP or "campainger" on the <a href="https://www.16personalities.com/">Myers-Brigg</a> scale, \
  an "influencer" on the <a href="https://www.discprofile.com/disc-styles">DiSC</a> scale, \
  and an "explorer" on the <a href="https://nifplay.org/what-is-play/play-personalities/">play personalities</a> scale. \
  I hope you enjoy learning about me and reach out so I can learn about you too.`,
  image: '/main.png',
};

const clickableCardsContent = [
  {
    title: 'Education',
    text: 'From advanced English and theatre to a computer science and autonomous vehicles to student health initiatives...',
    route: '/education',
    photoStack: ['/memories/math.jpg', '/memories/sos.jpg'],
  },
  {
    title: 'Work Experience',
    text: 'From startups to big tech, Toronto to Silicon Valley, healthcare to e-commerce, and my very own retrospective templates...',
    route: '/work',
    photoStack: ['/memories/ibm-intern.jpg', '/memories/linkedin-intern.jpg'],
  },
  {
    title: 'Volunteer History',
    text: 'From mentoring girls in STEM to speaking at conferences to teaching employees transitioning to engineering how to code...',
    route: '/volunteer',
    photoStack: ['/memories/women.jpg', '/memories/pannel.jpg'],
  },
  {
    title: 'Animal Rescue',
    text: 'From fostering 23 cats to socializing and providing medical care to facilitating adoptions with my local shelters...',
    route: '/animals',
    photoStack: ['/cats/cat-22.jpg', '/cats/cat-18-19.jpg'],
  },
  {
    title: 'Hobbies',
    text: 'From playing the piano and writing songs to running for children\'s hospitals to experimenting with art and cooking...',
    route: '/hobbies',
    photoStack: ['/memories/mrr-shirt.jpg', '/memories/art.jpg'],
  },
  {
    title: 'Projects',
    text: 'From deploying this website to building a Taylor Swift song ranking app as well as an all-in-one wedding planning tool...',
    route: '/projects',
    photoStack: ['/memories/wedding.jpg', '/memories/eras-tour.jpg'],
  },
];

export const AboutMe = () => <Page mainCardContent={mainCardContent} clickableCardsContent={clickableCardsContent} />;
