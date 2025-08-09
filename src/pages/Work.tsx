import { Page } from './Page';

const mainCardContent = {
  title: 'Work Experience',
  text: 'Thanks to the University of Waterloo\'s co-op program, I was able to experience a variety of roles, workplaces, and tech stacks early in my career. \
  From startups to corporations and Toronto to Sillicon Valley, I worked on building a strong foundation as a software developer with communication and leadership skills. \
  I then spent 5 years at Shopify where I used these skills to grow my impact as an individual contributor by streamlining on-call processes, leading workshops for the Women at Shopify Employee Resource Group, and championing projects. \
  The latter involved faciliating Agile ceremonies and collaborating with product/UX/data on technical design documents which helped me discover my passion for accelerating cross-functional teams. \
  I created templates for retrospectives to build trust and domain-driven design exercises to build alignment which are now used by many people.',
  buttons: [
    { logo: '/logos/figma.png', text: 'My retro templates', link: 'https://www.figma.com/board/QKX955drwMPSZnWqmzoGWq/Selena-s-Retro-Templates' },
    { logo: '/logos/figma.png', text: 'My DDD templates', link: 'https://www.figma.com/board/wiKELhKIRMwcoeAbYewzcC/Selena-s-DDD-Templates' },
  ],
};

const cardsContent = [
  {
    title: 'Shopify',
    text: 'As a senior software developer, I architected and built e-commerce features such as a centralized notification platform and dynamically contextualized storefronts using Ruby on Rails, GraphQL, MySQL, React, Kafka, and Kubernetes.',
    image: '/memories/shopify-fulltime.jpg',
    date: 'Sep 2019 - May 2025',
    button: { logo: '/logos/shopify.png', text: 'Learn more', link: 'https://www.shopify.com/' },
  },
  {
    title: 'LinkedIn',
    text: 'As a software developer, I implemented REST APIs to aggregate code review metrics for internal engineering teams 5 times faster using Python and SQL Alchemy.',
    image: '/memories/linkedin-intern.jpg',
    date: 'Jan-Apr 2019',
    button: { logo: '/logos/linkedin.png', text: 'Learn more', link: 'https://www.linkedin.com/' },
  },
  {
    title: 'IBM Extreme Blue',
    text: 'As a developer in the Extreme Blue program, I prototyped a real-time cognitive automation advisor using Python and Tensorflow. We then pitched the UX flow and business model to investors Dragon\'s Den style.',
    image: '/memories/ibm-intern.jpg',
    date: 'May-Aug 2018',
    button: { logo: '/logos/ibm.png', text: 'Learn more', link: 'https://www.ibm.com/careers/blog/extreme-blue-ibms-leadership-program-for-future-tech-business-leaders' },
  },
  {
    title: 'Rangle.io',
    text: 'As a web developer at a consultancy, I designed and developed responsive component libraries for clients with web apps using Angular JS and Tailwind CSS. I also ran AI and IoT guilds.',
    image: '/memories/iot.jpg',
    date: 'Sep-Dec 2017',
    button: { logo: '/logos/rangle.png', text: 'Learn more', link: 'https://rangle.io/' },
  },
  {
    title: 'RLDatix',
    text: 'As a software developer, I built navigation, search, and data export flows for a healthcare portal hosted on Salesforce using Apex and SOQL.',
    image: '/memories/rl-intern.jpg',
    date: 'Jan-Apr 2017',
    button: { logo: '/logos/rl.png', text: 'Learn more', link: 'https://www.rldatix.com/' },
  },
  {
    title: 'Influitive',
    text: 'As an automation engineer, I created 200+ unit and integration tests to run automatically when deploying changes to a B2B marketing web app using JUnit and Selenium WebDriver.',
    image: '/memories/influitive-intern.jpg',
    date: 'May-Aug 2016',
    button: { logo: '/logos/influitive.png', text: 'Learn more', link: 'https://influitive.com/' },
  },
];

export const Work = () => <Page mainCardContent={mainCardContent} cardsContent={cardsContent} />;
