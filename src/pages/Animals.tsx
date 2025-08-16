import { Page } from './Page';

const mainCardContent = {
  title: 'Animal Rescue',
  text: 'One of my biggest passions is helping animals. \
  Thanks to these dedicated non-profit organizations, I\'ve had the pleasure of fostering 23 cats and counting! \
  This includes socializing, providing medical care, and facilitating adoptions. \
  You\'ll find more on my Instagram account where I welcome any questions.',
  buttons: [
    { logo: '/logos/instagram.png', text: '@selsfosterdiaries', link: 'https://www.instagram.com/selsfosterdiaries/' },
    { logo: '/logos/team-cat.png', text: 'Learn about TEAM', link: 'https://teamcatrescue.com/' },
    { logo: '/logos/pet-patrol.png', text: 'Learn about Pet Patrol', link: 'https://www.petpatrol.ca/' },
    { logo: '/logos/ava.png', text: 'Learn about AVA', link: 'https://www.avacats.org/' },
  ],
};

const cardsContent = [
  {
    image: '/cats/cat-23.jpg',
    title: 'Autumn',
    text: 'A beautiful 9 year old female who loves cuddles and chasing shadows. She is a Nebelung, known for their long silver coats and green eyes.',
    date: 'Aug 2025',
  },
  {
    image: '/cats/cat-22.jpg',
    title: 'Plot Twist',
    text: 'An affectionate and playful 4 year old female who travelled all the way from Kuwait for a second chance after being surrendered.',
    date: 'Jun-Jul 2025',
  },
  {
    image: '/cats/cat-20-21.jpg',
    title: 'Darius & Flanders',
    text: 'A bonded pair of 6 year old males who were surrendered. One obsessed with chasing wand toys and the other with being held like a baby given his "wobbly cat" syndrome.',
    date: 'Feb 2024 - Mar 2025',
  },
  {
    image: '/cats/cat-18-19.jpg',
    title: 'Bob & Linda',
    text: 'A 1 year old bonded pair rescued when Linda miscarried due to a uterine infection. They loved food and belly rubs.',
    date: 'May-Sep 2023',
  },
  {
    image: '/cats/cat-17.jpg',
    title: 'Dumpling',
    text: 'A 1 year old calico female who came from Texas to have her eye removed. She is almost always making biscuits!',
    date: 'Apr 2023',
  },
  {
    image: '/cats/cat-15-16.jpg',
    title: 'Mako & Buffy',
    text: 'Two female kittens who were rescued from Texas and paired together. They soon became best friends and purring experts.',
    date: 'Feb-Mar 2023',
  },
  {
    image: '/cats/cat-13-14.jpg',
    title: 'Queso & Quesadilla',
    text: 'Siblings who were rescued from Texas and adopted by a family with a young brother and sister, perfectly matching their vibe.',
    date: 'Sep-Oct 2022',
  },
  {
    image: '/cats/cat-12.jpg',
    title: 'Spritzer',
    text: 'One of mama Daiquiri\'s kittens. Full of energy and always getting into trouble yet irresistible with his handsome Siamese colouring.',
    date: 'Jul-Dec 2021',
  },
  {
    image: '/cats/cat-10-11.jpg',
    title: 'Whisky & Gin',
    text: 'Two of mama Daiquiri\'s kittens, male and female, who needed many baths to rid them of ringworm which was quite the adventure!',
    date: 'Jul-Dec 2021',
  },
  {
    image: '/cats/cat-9.jpg',
    title: 'Daiquiri',
    text: 'A 2 year old mama who was found pregnant with FIV and 8 BB gun pellet wounds... She came from Texas for medical care and thrived!',
    date: 'Jul-Dec 2021',
  },
  {
    image: '/cats/cat-8.jpg',
    title: 'Coffee',
    text: 'A 2 year old male who quickly recovered from back leg amputation after being hit by a car. There\'s nothing this warrior can\'t do!',
    date: 'May-Jun 2021',
  },
  {
    image: '/cats/cat-7.jpg',
    title: 'Senesa',
    text: 'A 2 year old female rescued in Winter who was initially shy but would give away her love for gentle pets by drooling.',
    date: 'Feb-Apr 2021',
  },
  {
    image: '/cats/cat-6.jpg',
    title: 'Harper',
    text: 'A sweet female kitten who ended up bonding with a mama cat at the shelter where she could nurse instead of being syringe-fed.',
    date: 'Nov 2020',
  },
  {
    image: '/cats/cat-4-5.jpg',
    title: 'Luca & Leila',
    text: 'A gentle male kitten found in a junkyard and a curious female kitten found in a cornfield, both grateful to be safe indoors.',
    date: 'Oct 2020',
  },
  {
    image: '/cats/cat-2-3.jpg',
    title: 'Juliet & Juniper',
    text: 'Two female kittens from the same litter who were rescued from a barn. Their hisses quickly turned into sweet meows.',
    date: 'Sep 2020',
  },
  {
    image: '/cats/cat-1.jpg',
    title: 'Kotton',
    text: 'A 1 year old male who just needed some patience and love to break out of his shell and transform from a feral cat to a happy companion.',
    date: 'Jul-Aug 2020',
  },
];

export const Animals = () => <Page mainCardContent={mainCardContent} cardsContent={cardsContent} />;
