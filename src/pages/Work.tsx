import { Page } from './Page';

const mainCardContent = {
  title: 'Work Experience',
  text: 'Thanks to the University of Waterloo\'s co-op program, I was able to embrace a variety of roles, workplaces, and tech stacks early in my career. \
  I love using my technical voice to accelerate cross-functional teams by fostering a culture of collaboration and facilitating Agile ceremonies that build alignment.',
  buttons: [
    { logo: '/logos/figma.png', text: 'My retro templates', link: 'https://www.figma.com/board/QKX955drwMPSZnWqmzoGWq/Selena-s-Retro-Templates' },
    { logo: '/logos/figma.png', text: 'My DDD templates', link: 'https://www.figma.com/board/wiKELhKIRMwcoeAbYewzcC/Selena-s-DDD-Templates' },
  ],
};

const cardsContent = [
  {
    title: 'Shopify',
    text: 'As a senior software developer, I architected and built e-commerce features such as dynamically contextualized storefronts and a centralized notification platform using Ruby on Rails, MySQL, GraphQL, React, Kafka, and Kubernetes.',
    image: '/memories/shopify-fulltime.jpg',
    date: 'Sep 2019 - May 2025',
    button: { logo: '/logos/shopify.png', text: 'Learn more', link: 'https://www.shopify.com/' },
  },
  {
    title: 'LinkedIn',
    text: 'As a software developer, I implemented a dashboard for code review metrics for internal engineering teams backed by REST APIs that aggregated data 5 times faster than before using Python and SQL Alchemy.',
    image: '/memories/linkedin-intern.jpg',
    date: 'Jan-Apr 2019',
    button: { logo: '/logos/linkedin.png', text: 'Learn more', link: 'https://www.linkedin.com/' },
  },
  {
    title: 'IBM Extreme Blue',
    text: 'As a software developer, I prototyped a real-time cognitive automation advisor using Python and Tensorflow. We then pitched the UX flow and business model to investors in a Dragon\'s Den style competition.',
    image: '/memories/ibm-intern.jpg',
    date: 'May-Aug 2018',
    button: { logo: '/logos/ibm.png', text: 'Learn more', link: 'https://www.ibm.com/careers/blog/extreme-blue-ibms-leadership-program-for-future-tech-business-leaders' },
  },
  {
    title: 'Rangle.io',
    text: 'As a full stack developer, I designed and developed responsive component libraries for consulting clients with web apps using Angular JS and Tailwind CSS. I also facilitated weekly AI and IoT guilds.',
    image: '/memories/iot.jpg',
    date: 'Sep-Dec 2017',
    button: { logo: '/logos/rangle.png', text: 'Learn more', link: 'https://rangle.io/' },
  },
  {
    title: 'RLDatix',
    text: 'As a software developer, I built user flows for navigation, search, and data import/export within a healthcare portal hosted on Salesforce using Apex and SOQL. This company was known as RL Solutions at the time.',
    image: '/memories/rl-intern.jpg',
    date: 'Jan-Apr 2017',
    button: { logo: '/logos/rl.png', text: 'Learn more', link: 'https://www.rldatix.com/' },
  },
  {
    title: 'Influitive',
    text: 'As an automation engineer, I created 200+ unit, regression, and integration tests to run automatically when deploying changes to a B2B marketing web app using JUnit and Selenium WebDriver.',
    image: '/memories/influitive-intern.jpg',
    date: 'May-Aug 2016',
    button: { logo: '/logos/influitive.png', text: 'Learn more', link: 'https://influitive.com/' },
  },
];

export const Work = () => <Page mainCardContent={mainCardContent} cardsContent={cardsContent} />;
