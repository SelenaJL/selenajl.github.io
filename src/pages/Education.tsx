import { Page } from './Page';

const mainCardContent = {
  title: 'Education',
  text: 'In 2015, I graduated from Our Lady of Mount Carmel Secondary with <a href="https://apcentral.collegeboard.org/courses/ap-english-literature-and-composition/exam">Advanced Placement English</a> and the Computer Science award. \
  In 2020, I graduated from the University of Waterloo with an Honours <a href="https://cs.uwaterloo.ca/future-undergraduate-students/undergraduate-programs-and-courses/computer-science">Bachelor of Computer Science</a> and specialization in Human-Computer Interaction.',
};

const cardsContent = [
  {
    title: 'Warrior Recreation',
    text: 'I was an ambassador for the University of Waterloo where I promoted student health and wellness on social media and ran campus events for Bell Let\'s Talk Day.',
    image: '/memories/wrap.jpg',
    date: 'Jan-Apr 2020',
    button: { logo: '/logos/uw.png', text: '@wloorec', link: 'https://www.instagram.com/wloorec/' },
  },
  {
    title: 'WATonomous',
    text: 'I led the Camera Calibration project for the University of Waterloo\'s student design team building an autonomous vehicle for the SAE AutoDrive Challenge.',
    image: '/memories/waymo.jpg',
    date: 'Sep-Dec 2018',
    button: { logo: '/logos/wato.png', text: 'Learn more', link: 'https://www.watonomous.ca/' },
  },
  {
    title: 'UW WiCS',
    text: 'I was an orientation leader, residence tour guide, and academic success speaker for students joining the University of Waterloo\'s Math faculty and computer science program.',
    image: '/memories/math.jpg',
    date: 'Sep 2016 & 2018',
    button: { logo: '/logos/wics.png', text: 'Learn more', link: 'https://wics.uwaterloo.ca/' },
  },
  {
    title: 'CAN-CWiC',
    text: 'I was awarded "Best Student Tech Talk" at the Canadian Celebration of Women in Computing where I spoke about the intersection of design and development.',
    image: '/memories/can-cwic-talk.jpg',
    date: 'Nov 2017',
    button: { logo: '/logos/can-cwic.png', text: 'Learn more', link: 'https://cscan-infocan.ca/celebration-of-women-in-computing/' },
  },
  {
    title: 'Sears Ontario Drama Festival ',
    text: 'I wrote, directed, staged-managed, and performed in student theatre productions to compete and raise money for Mothers Against Drunk Driving.',
    image: '/memories/drama.jpg',
    date: '2014-2015',
    button: { logo: '/logos/sears.png', text: 'Learn more', link: 'https://searsdramafestival.com/' },
  },
  {
    title: 'Share Our Spirit',
    text: 'I founded then led a hip-hop youth exchange program for 3 years and am proud to say it\'s still connecting singers, rappers, and dancers across Canada to this day!',
    image: '/memories/sos.jpg',
    date: '2011-2015',
    button: { logo: '/logos/sos.png', text: '@sosolmc', link: 'https://www.instagram.com/sosolmc/' },
  },
];

export const Education = () => <Page mainCardContent={mainCardContent} cardsContent={cardsContent} />;
