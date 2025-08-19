import { Page } from './Page';

const mainCardContent = {
  title: 'Volunteer History',
  text: 'Being involved in the greater tech community, especially with youth, is incredibly inspiring and fulfilling. \
  My goal is to be the role model I wish I had growing up when I was instead told that women didn\'t belong in this field. \
  Thanks to these incredible initiatives, I\'m able to change that narrative.',
};

const cardsContent = [
  {
    title: 'Technovation',
    text: 'As a coach for the global Technovation Girls program, I provided guidance to 8 teams using Thunkable or MIT App Inventor. We covered UX research, design, code, API/AI integrations, business models, and presentation skills.',
    date: 'Oct 2024 - Apr 2025',
    image: '/memories/women.jpg',
    button: { logo: '/logos/technovation.png', text: 'Learn more', link: 'https://technovationchallenge.org/' },
  },
  {
    title: 'Shopify',
    text: 'I taught a 6-month introductory Computer Science course for support staff transitioning to engineering. I also developed technical training on storefronts to help 20+ launch consultants better promote the feature.',
    date: '2022 & 2025',
    image: '/memories/training.jpg',
    button: { logo: '/logos/shopify.png', text: 'Learn more', link: 'https://shopify.dev/docs/storefronts' },
  },
  {
    title: 'Network for Teaching Entrepreneurship',
    text: 'As a judge for the World Series of Innovation Impact League, I provided feedback for technical solutions to the UN Sustainable Development Goals.',
    date: 'Jan 2025',
    image: '/memories/stickies.jpg',
    button: { logo: '/logos/nfte.png', text: 'Learn more', link: 'https://innovation.nfte.com/' },
  },
  {
    title: 'Mission Bit',
    text: 'As a panelist for the virtual Tech Start program, I spoke to 40+ undergraduate and graduate students about strategies for building developer skills and growing their network.',
    date: 'Oct 2024',
    image: '/memories/webcam.jpg',
    button: { logo: '/logos/mission-bit.png', text: 'Learn more', link: 'https://missionbit.org/programs/career-prep/tech-start-program/' },
  },
  {
    title: 'hEr VOLUTION',
    text: 'As a coach for the STEMing Up program, I hosted weekly sessions to help teams design and prototype technical projects then pitch them in a Dragon\'s Den style competition. I also gave feedback as a hackathon judge.',
    date: '2020-2024',
    image: '/memories/zoom.jpg',
    button: { logo: '/logos/hervolution.png', text: 'Learn more', link: 'https://hervolution.org/' },
  },
  {
    title: 'HRD Canada',
    text: 'As a panelist for a webinar in partnership with the University of Waterloo\'s Work-Learn Institute, I spoke to 500+ attendees about how the COVID-19 pandemic might affect talent recruitment and retention.',
    date: 'Sep 2020',
    image: '/memories/hrd-talk.jpg',
    button: { logo: '/logos/hrd.png', text: 'Watch recording', link: 'https://uwaterloo.ca/work-learn-institute/events/webinar-future-work-and-your-talent-pipeline-what-covid-19' },
  },
  {
    title: 'IBM STEM for Girls',
    text: 'As a camp leader, I ran a day of activities to teach 20+ grade 6 girls how to build robotic cars that could navigate a maze on its own using Lego Mindstorms and the Scratch visual programming language.',
    date: 'Aug 2018',
    image: '/memories/lego.jpg',
    button: { logo: '/logos/ibm-stem.png', text: 'Learn more', link: 'https://ibmstemforgirls.wordpress.com/' },
  },
  {
    title: 'Rangle.io',
    text: 'I facilitated weekly employee guilds on Artificial Intelligence (AI) and the Internet of Things (IoT) where we explored emerging technologies and built hands-on projects such as simple Arduino-based devices.',
    date: 'Sep-Dec 2017',
    image: '/memories/iot.jpg',
    button: { logo: '/logos/rangle.png', text: 'Learn more', link: 'https://rangle.io/blog/ai-and-the-future-of-digital-experience-platforms' },
  },
  {
    title: 'Tech Ladies',
    text: 'As a speaker and panelist for the Toronto meetup, I gave a lightning talk about the intersection of design and development to 60+ attendees then shared my experience with diversity in STEM.',
    date: 'Oct 2017',
    image: '/memories/pannel.jpg',
    button: { logo: '/logos/tech-ladies.png', text: 'Learn more', link: 'https://www.hiretechladies.com/' },
  },
];

export const Volunteer = () => <Page mainCardContent={mainCardContent} cardsContent={cardsContent} />;
