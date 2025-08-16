import { Page } from './Page';

const mainCardContent = {
  title: 'Hobbies',
  text: 'Life is too short not to get wrapped up in things that delight us! \
  In fact, I believe we could all do a much better job at sharing our joy with the world and keeping our childhood wonder alive as adults. \
  Therefore, I proudly present to you a few of my favourite things.',
};

const cardsContent = [
  {
    title: 'Music',
    text: 'Learning piano, singing, songwriting, and playing music with my dad was a huge part of my childhood. In fact, we did a father daughter dance turned duet at my wedding! You\'ll find a video of that along with covers and original songs on my YouTube channel.',
    image: '/memories/piano.jpg',
    button: { logo: '/logos/youtube.png', text: '@selenajazz', link: 'https://www.youtube.com/@selenajazz' },
  },
  {
    title: 'Million Reasons Run',
    text: 'Every May for the past 5 years I\'ve challenged myself to partake in this incredible event where runners across Canada raise money for local children\'s hospitals. Thanks to the support of my family and friends, I\'ve run a total of 226km and raised $6643 for SickKids!',
    image: '/memories/mrr-shirt.jpg',
    button: { logo: '/logos/mrr.png', text: 'Learn more', link: 'https://www.millionreasons.run/' },
  },
  {
    title: 'Nonviolent Communication',
    text: 'Empathy is one of my core values. This book by Marshall Rosenberg has had a profound impact on my worldview and relationships so I highly recommend it. I actively practise expressing my needs in life-enriching ways and receiving the needs of others as a gift.',
    image: '/memories/nvc.jpg',
    button: { logo: '/logos/cnvc.svg', text: 'Learn more', link: 'https://www.cnvc.org/store/nonviolent-communication-a-language-of-life' },
  },
  {
    title: 'Art',
    text: 'From painting with acrylics and watercolour to cross stitch and macrame, scrapbooking, woodworking, resin jewelry, bullet journaling, digital drawings, lino print, Cricut crafts, and yearly Halloween costumes... I love expressing myself through new creations.',
    image: '/memories/art.jpg',
  },
  {
    title: 'Cooking and Baking',
    text: 'Anyone in my life knows I try to bring a homemade dish to every event! Not only is it fun to experiment with recipes as well as cost effective, sustainable, and healthy to eat at home but sharing food is my favourite way to nourish those around me.',
    image: '/memories/food.jpg',
  },
  {
    title: 'National Parks',
    text: 'Mother nature is magical. I\'ve had the pleasure of visting Hawaii Volcanoes, Death Valley, Grand Canyon, Bryce Canyon, Zion, Yosemite, and Georgian Bay Islands as well as Mt. Baker-Snoqualmie National Forest, Point Reyes National Seashore, and Muir Woods National Monument.',
    image: '/memories/proposal.jpg',
  },
];

export const Hobbies = () => <Page mainCardContent={mainCardContent} cardsContent={cardsContent} />;
