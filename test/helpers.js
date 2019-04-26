const randomString = (length) => {
  const x = 36 ** (length + 1);
  const y = 36 ** length;
  return Math.round(x - (Math.random() * y)).toString(36).slice(1);
};

const pages = [
  {
    route: '/',
    title: 'Van Hoang',
    heading: 'ABOUT ME',
  },
  {
    route: '/traveling',
    title: 'Traveling | Van Hoang',
    heading: 'TRAVELING',
  },
  {
    route: '/projects',
    title: 'Mini Projects | Van Hoang',
    heading: 'MINI PROJECTS',
  },
  {
    route: '/funfacts',
    title: 'Fun Facts | Van Hoang',
    heading: 'FUN FACTS',
  },
  {
    route: '/contact',
    title: 'Contact | Van Hoang',
    heading: 'CONTACT',
  },
];

export { pages, randomString };
