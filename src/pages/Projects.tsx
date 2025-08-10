import { Page } from './Page';

const mainCardContent = {
  title: 'Projects',
  text: 'I recently decided to start deploying my personal projects for the world to see and use - this website being the first of many to come! \
  I know I\'m not alone in feeling intimidated by this... Will it perform as expected? Will people like it? Will it actually be useful? \
  But I\'ll never know if I don\'t try... so it\'s time to be open to the many possible outcomes, embrace failure, and stop letting perfection be the enemy of the good.',
  buttons: [
    { logo: '/logos/github.png', text: 'See what I\'ve built', link: 'https://github.com/SelenaJL' },
  ],
};

const cardsContent = [
  {
    title: 'Our Day, Our Way',
    text: 'After thoroughly enjoying the process of planning my own wedding, I felt inspired to create an all-in-one tool that would empower others to do the same! \
    Features include vendor selection, budgeting, guest list management, day of coordination, and more.',
    image: '/memories/wedding.jpg',
    date: 'Coming Sep 2025',
  },
  {
    title: 'Swiftie Stats',
    text: 'As a massive fan of Taylor Swift, I\'m often asked for my favourite era. To properly answer this question, I created spreadsheets to rank songs and score each album. \
    I then decided to turn this into an app that integrates with Spotify so everyone can be as nerdy as me!',
    image: '/memories/eras-tour.jpg',
    date: 'Coming Aug 2025',
  },
  {
    title: 'City Vibes',
    text: 'For Hack Western 2017, my team built a mobile app to collect data as well as a web app to classify different types of sounds and plot results on a heatmap. \
    Our goal was to detect and visualize noise pollution in a city using Gradle, Flask, and React.',
    image: '/memories/hackathon.jpg',
    date: 'Nov 2017',
  },
];

export const Projects = () => <Page mainCardContent={mainCardContent} cardsContent={cardsContent} />;
