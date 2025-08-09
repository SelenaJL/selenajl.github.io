import { Page } from './Page';

const mainCardContent = {
  title: 'Education',
  text: 'As someone who loves learning, I\'m thankful I had the opportunity to pursue my passions throughout school. \
  I first graduated from Our Lady of Mount Carmel Secondary in 2015 with the Computer Science award and Advanced Placement English. \
  I then graduated from the University of Waterloo in 2020 with an Honours Bachelor of Computer Science and specialization in Human-Computer Interaction. \
  Below are some of the initiatives I participated in while studying.',
};

const cardsContent = [
  {
    title: 'Warrior Recreation',
    text: 'I was an ambasaador for the University of Waterloo, promoting student health and wellness on social media. I also ran campus events for Bell Let\'s Talk Day.',
    image: '/memories/wrap.jpg',
    date: 'Jan-Apr 2020',
    button: { logo: '/logos/bell.png', text: '#BellLetsTalk', link: 'https://letstalk.bell.ca/' },
  },
  {
    title: 'WATonomous',
    text: 'I led the Camera Calibration project for the University of Waterloo\'s student design team participating in the SAE AutoDrive Challenge to build an autonomous vehicle. ',
    image: '/memories/waymo.jpg',
    date: 'Sep-Dec 2018',
    button: { logo: '/logos/wato.png', text: 'Learn more', link: 'https://www.watonomous.ca/' },
  },
  {
    title: 'CAN-CWiC',
    text: 'I was awarded "Best Student Tech Talk" at the Canadian Celebration of Women in Computing where I spoke about the intersection of design and development to 50+ attendees.',
    image: '/memories/can-cwic-talk.jpg',
    date: 'Sep-Dec 2018',
    button: { logo: '/logos/can-cwic.png', text: 'Learn more', link: 'https://cscan-infocan.ca/celebration-of-women-in-computing/' },
  },
  {
    title: 'UW WiCS',
    text: 'I was an orientation leader, residence tour guide, and academic success speaker for students joining the University of Waterloo\'s Math faculty and computer science program.',
    image: '/memories/math.jpg',
    date: 'Sep 2016 & 2018',
    button: { logo: '/logos/wics.png', text: 'Learn more', link: 'https://wics.uwaterloo.ca/' },
  },
  {
    title: 'Sears Ontario Drama Festival ',
    text: 'I wrote, directed, staged managed, and acted in two student-run productions to compete in the festival. We then hosted a show to raise money for Mothers Against Drunk Driving.',
    image: '/memories/drama.jpg',
    date: '2014-2015',
    button: { logo: '/logos/sears.png', text: 'Learn more', link: 'https://madd.ca/pages/' },
  },
  {
    title: 'Share Our Spirit',
    text: 'After my school lost funding for this hip hop youth exchange program, I lead it for 3 years then passed on the torch. It\'s still connecting singers, rappers, and dancers accross Ontario and Quebec to this day!',
    image: '/memories/sos.jpg',
    date: '2011-2015',
    button: { logo: '/logos/instagram.png', text: '@sosolmc', link: 'https://www.instagram.com/sosolmc/' },
  },
];

export const Education = () => <Page mainCardContent={mainCardContent} cardsContent={cardsContent} />;
