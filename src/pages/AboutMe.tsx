import { Page } from './Page';

const mainCardContent = {
  title: "Welcome to my world!",
  text: `I'm a technical solutions engineer who lives in Toronto, Canada with my husband and foster cats. \
  I thrive on connection and creativity which makes sense given that \
  I'm a type 2 or "helper" on the <a href="https://www.enneagraminstitute.com/">Enneagram</a> scale, \
  an ENFP or "campaigner" on the <a href="https://www.16personalities.com/">Myers-Brigg</a> scale, \
  an "influencer" on the <a href="https://www.discprofile.com/disc-styles">DiSC</a> scale, \
  and an "explorer" on the <a href="https://nifplay.org/what-is-play/play-personalities/">play personalities</a> scale. \
  I hope you enjoy learning about me and reach out so I can learn about you too.`,
  image: '/main.png',
};

const clickableCardsContent = [
  {
    title: 'Education',
    text: 'Read about what drove me as a student beyond my studies, from community and mental health initatives to autonomous vehicles...',
    route: '/education',
    photoStack: ['/memories/math.jpg', '/memories/sos.jpg'],
  },
  {
    title: 'Work Experience',
    text: 'Read about my adventures at 7 different companies, from startups to big tech, then check out my team retrospective templates...',
    route: '/work',
    photoStack: ['/memories/ibm-intern.jpg', '/memories/stripe.jpg'],
  },
  {
    title: 'Volunteer History',
    text: 'Read about my passion for teaching, mentorship, and public speaking through events for women and youth in STEM...',
    route: '/volunteer',
    photoStack: ['/memories/women.jpg', '/memories/equate.jpg'],
  },
  {
    title: 'Animal Rescue',
    text: 'Read about my journey fostering 24 cats and counting, then check out the incredible shelters I\'ve partnered with over the years...',
    route: '/animals',
    photoStack: ['/cats/cat-25.jpg', '/cats/cat-18-19.jpg'],
  },
  {
    title: 'Hobbies',
    text: 'Read about things that spark my joy like creating music or art, connecting with nature, and running for children\'s hospitals...',
    route: '/hobbies',
    photoStack: ['/memories/mrr-shirt.jpg', '/memories/art.jpg'],
  },
  {
    title: 'Projects',
    text: 'Read about what I\'m building, from this website to a Taylor Swift song ranking app or an all-in-one wedding planning tool...',
    route: '/projects',
    photoStack: ['/memories/wedding.jpg', '/memories/eras-tour.jpg'],
  },
];

export const AboutMe = () => <Page mainCardContent={mainCardContent} clickableCardsContent={clickableCardsContent} />;
