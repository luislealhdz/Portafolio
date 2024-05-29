import CardOptions from '../../interfaces/card-options';
import CardPresentation from '../../interfaces/card-presentation';
import ImageTile from '../../interfaces/image-tile';
import SocialMediaTile from '../../interfaces/social-media-tile';

export const CARD_INFORMATION_ES: CardOptions[] = [
  {
    hasMainTitle: true,
    mainTitle: 'Hola, soy Luis Leal',
    hasDescription: true,
    description:
      'Un Ingeniero en Desarrollo de Software apasionado por las tecnologías de la web.',
    hasALink: false,
    isImage: false
  },
  {
    hasMainTitle: false,
    hasDescription: false,
    hasALink: false,
    routeName: 'projects',
    isImage: true,
    imageSource:
      'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    imageText: 'Proyecto Backend actual'
  },
  {
    hasMainTitle: false,
    hasDescription: false,
    hasALink: false,
    routeName: 'projects',
    isImage: true,
    imageSource:
      'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    imageText: 'Proyecto Frontend actual'
  },
  {
    hasMainTitle: false,
    hasDescription: false,
    hasALink: false,
    isImage: true,
    imageSource: 'https://avatars.githubusercontent.com/u/95981661?v=4'
  },
  {
    hasMainTitle: false,
    secondaryTitle: 'Sobre mí',
    hasDescription: true,
    description: 'Desarrollador Java Full Stack con Angular',
    hasALink: true,
    routeName: 'about-me',
    isImage: false
  },
  {
    hasMainTitle: false,
    hasDescription: false,
    hasALink: false,
    routeName: 'projects',
    isImage: true,
    imageSource:
      'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    imageText: 'Proyecto reciente'
  },
  {
    hasMainTitle: false,
    secondaryTitle: 'Proyectos',
    hasDescription: true,
    description:
      '¿Qué he estado creando? ¡Explora algunos de mis proyectos previos!',
    hasALink: true,
    routeName: 'projects',
    isImage: false
  },
  {
    hasMainTitle: true,
    mainTitle: 'Tecnologías que utilizo',
    hasDescription: false,
    hasALink: false,
    isImage: false,
    isSlider: true
  },
  {
    hasMainTitle: false,
    hasDescription: false,
    hasALink: false,
    isImage: false,
    isSwitchLanguage: true
  }
];

export const CARD_INFORMATION_EN: CardOptions[] = [
  {
    hasMainTitle: true,
    mainTitle: 'Hello, I am Luis Leal',
    hasDescription: true,
    description:
      'A Software Development Engineer passionate about web technologies.',
    hasALink: false,
    isImage: false
  },
  {
    hasMainTitle: false,
    hasDescription: false,
    hasALink: false,
    routeName: 'projects',
    isImage: true,
    imageSource:
      'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    imageText: 'Current Backend Project'
  },
  {
    hasMainTitle: false,
    hasDescription: false,
    hasALink: false,
    routeName: 'projects',
    isImage: true,
    imageSource:
      'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    imageText: 'Current Frontend Project'
  },
  {
    hasMainTitle: false,
    hasDescription: false,
    hasALink: false,
    isImage: true,
    imageSource: 'https://avatars.githubusercontent.com/u/95981661?v=4'
  },
  {
    hasMainTitle: false,
    secondaryTitle: 'About me',
    hasDescription: true,
    description: 'Full Stack Java Developer with Angular',
    hasALink: true,
    routeName: 'about-me',
    isImage: false
  },
  {
    hasMainTitle: false,
    hasDescription: false,
    hasALink: false,
    routeName: 'projects',
    isImage: true,
    imageSource:
      'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    imageText: 'Recent project'
  },
  {
    hasMainTitle: false,
    secondaryTitle: 'Projects',
    hasDescription: true,
    description:
      'What have I been creating? Explore some of my previous projects!',
    hasALink: true,
    routeName: 'projects',
    isImage: false
  },
  {
    hasMainTitle: false,
    hasDescription: false,
    hasALink: false,
    isImage: false,
    isSlider: true
  },
  {
    hasMainTitle: true,
    mainTitle: 'Stack I use',
    hasDescription: false,
    hasALink: false,
    isImage: false,
    isSlider: true
  },
  {
    hasMainTitle: false,
    hasDescription: false,
    hasALink: false,
    isImage: false,
    isSwitchLanguage: true
  }
];

export const IMAGE_TILE_DATA: ImageTile[] = [
  { src: '../../../assets/icons/1.svg', alt: 'HTML5' },
  { src: '../../../assets/icons/2.svg', alt: 'CSS3' },
  { src: '../../../assets/icons/3.svg', alt: 'Tailwind CSS' },
  { src: '../../../assets/icons/4.svg', alt: 'Bootstrap' },
  { src: '../../../assets/icons/5.svg', alt: 'JavaScript' },
  { src: '../../../assets/icons/6.svg', alt: 'TypeScript' },
  { src: '../../../assets/icons/7.svg', alt: 'Angular' },
  { src: '../../../assets/icons/8.svg', alt: 'Jest' },
  { src: '../../../assets/icons/9.svg', alt: 'Jasmine' },
  { src: '../../../assets/icons/10.svg', alt: 'Karma' },
  { src: '../../../assets/icons/11.svg', alt: 'Firebase' },
  { src: '../../../assets/icons/12.svg', alt: 'MySQL' },
  { src: '../../../assets/icons/13.svg', alt: 'PostgreSQL' },
  { src: '../../../assets/icons/14.svg', alt: 'Postman' },
  { src: '../../../assets/icons/15.svg', alt: 'Java' },
  { src: '../../../assets/icons/16.svg', alt: 'Spring' },
  { src: '../../../assets/icons/17.svg', alt: 'Django' },
  { src: '../../../assets/icons/18.svg', alt: 'Figma' },
  { src: '../../../assets/icons/19.svg', alt: 'Jira' },
  { src: '../../../assets/icons/20.svg', alt: 'Trello' },
  { src: '../../../assets/icons/1.svg', alt: 'HTML5' },
  { src: '../../../assets/icons/2.svg', alt: 'CSS3' },
  { src: '../../../assets/icons/3.svg', alt: 'Tailwind CSS' },
  { src: '../../../assets/icons/4.svg', alt: 'Bootstrap' },
  { src: '../../../assets/icons/5.svg', alt: 'JavaScript' },
  { src: '../../../assets/icons/6.svg', alt: 'TypeScript' },
  { src: '../../../assets/icons/7.svg', alt: 'Angular' },
  { src: '../../../assets/icons/8.svg', alt: 'Jest' },
  { src: '../../../assets/icons/9.svg', alt: 'Jasmine' },
  { src: '../../../assets/icons/10.svg', alt: 'Karma' },
  { src: '../../../assets/icons/11.svg', alt: 'Firebase' },
  { src: '../../../assets/icons/12.svg', alt: 'MySQL' },
  { src: '../../../assets/icons/13.svg', alt: 'PostgreSQL' },
  { src: '../../../assets/icons/14.svg', alt: 'Postman' },
  { src: '../../../assets/icons/15.svg', alt: 'Java' },
  { src: '../../../assets/icons/16.svg', alt: 'Spring' },
  { src: '../../../assets/icons/17.svg', alt: 'Django' },
  { src: '../../../assets/icons/18.svg', alt: 'Figma' },
  { src: '../../../assets/icons/19.svg', alt: 'Jira' },
  { src: '../../../assets/icons/20.svg', alt: 'Trello' }
];

export const SOCIAL_MEDIA_ICONS: SocialMediaTile[] = [
  {
    src: '../../../assets/icons/sm-1.svg',
    alt: 'Email',
    link: 'mailto:luisnglealhdz@gmail.com'
  },
  {
    src: '../../../assets/icons/sm-2.svg',
    alt: 'Linkedin',
    link: 'www.linkedin.com/in/luis-leal-hdz'
  },
  {
    src: '../../../assets/icons/sm-3.svg',
    alt: 'Github',
    link: 'https://github.com/luislealhdz'
  }
];

export const CARD_PRESENTATION_ES: CardPresentation[] = [
  {
    hasMainTitle: true,
    mainTitle: 'Sobre mí',
    hasSecondaryTitle: true,
    secondaryTitle: 'Mi historia',
    hasSecondaryDescription: true,
    secondaryDescription: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem repellat exercitationem est. Magnam fuga vitae
    deleniti officiis! Officia hic, eligendi possimus omnis ut maxime aliquid delectus, fugit eos est optio.`,
    hasThirdTitle: true,
    thirdTitle: '¿Qué estoy haciendo ahora?',
    hasThirdDescription: true,
    thirdDescription: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem repellat exercitationem est. Magnam fuga vitae
    deleniti officiis! Officia hic, eligendi possimus omnis ut maxime aliquid delectus, fugit eos est optio.`
  },
  {
    hasSecondaryTitle: true,
    secondaryTitle: 'Experiencia',
    hasExperienceBlock: true,
    experience: [
      {
        titlePosition: 'Practicante de Sistemas',
        company: 'Green Clean',
        timeLaps: 'Agosto 2023 - Diciembre 2023'
      },
      {
        titlePosition: 'Application Developer',
        company: 'Atos',
        timeLaps: 'Julio 2022 - Diciembre 2022'
      },
      {
        titlePosition: 'Campus Intern',
        company: 'Universidad Tecmilenio',
        timeLaps: 'Enero 2020 - Julio 2022'
      }
    ]
  }
];

export const CARD_PRESENTATION_EN: CardPresentation[] = [];
