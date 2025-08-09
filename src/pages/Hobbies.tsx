import { Page } from './Page';

const mainCardContent = {
  title: 'Hobbies',
  text: 'Life is too short not to get wrapped up in things that delight us! \
  In fact, I belive we could do a much better job at sharing our joy with the world and keeping our childhood wonder alive as adults. \
  Therefore, my personal website wouldn\'t be complete without proudly sharing the things I do for fun.',
  buttons: [
    { logo: '/logos/youtube.png', text: '@selenajazz', link: 'https://www.youtube.com/@selenajazz' },
    { logo: '/logos/mrr.png', text: 'Learn about MRR', link: 'https://www.millionreasons.run/' },
  ],
};

const cardsContent = [
  {
    title: 'Music',
    text: 'Learning piano, singing, songwriting, and playing music with my dad was a huge part of my childhood. In fact, we did a father daughter dance turned duet at my wedding! You\'ll find a video of that along with covers and original songs on my YouTube channel linked above.',
    image: '/memories/piano.jpg',
  },
  {
    title: 'Million Reasons Run',
    text: 'Every May for the past 4 years I\'ve challenged myself to partake in this incredible event where runners accross Canada raise money for local childrens hospitals. Thanks to the support of my family and friends, I\'ve run a total of 226km and raised $6643 for SickKids!!!',
    image: '/memories/mrr-shirt.jpg',
  },
  {
    title: 'National Parks',
    text: 'Mother nature is magical. I\'ve had the pleasure of visting Hawaii Volcanoes, Death Valley, Grand Canyon, Bryce Canyon, Zion, Yosemite, and Georgian Bay Islands as well as Mt. Baker-Snoqualmie National Forest, Point Reyes National Seashore, and Muir Woods National Monument.',
    image: '/memories/proposal.jpg',
  },
  {
    title: 'Art',
    text: 'From painting with acrylics and watercolour to cross stitch and macrame, scrapbooking, woodworking, resin jewlery, bullet journaling, digital drawings, lino print, Cricut crafts, and of course yearly Halloween costumes... I love expressing myself through new creations.',
    image: '/memories/art.jpg',
  },
  {
    title: 'Non-Violent Communication',
    text: 'Empathy is one of my core values so this book by Marshall Rosenberg had a profound impact on my worldview and relationships. It\'s taught me to express my needs in life-enriching ways and to recieve the needs of others as a gift. Therefore, it\'s something I actively practise.',
    image: '/memories/nvc.jpg',
  },
  {
    title: 'Cooking and Baking',
    text: 'Anyone in my life knows I try to bring a homemade dish to every event! Not only is it fun to experiment with recipies as well as cost effective, sustainable, and healthier to eat at home but sharing food is my favourite way to nourish my community.',
    image: '/memories/food.jpg',
  },
];

export const Hobbies = () => <Page mainCardContent={mainCardContent} cardsContent={cardsContent} />;
