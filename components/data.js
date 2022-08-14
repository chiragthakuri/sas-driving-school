import {
  EmojiHappyIcon,
  ChartSquareBarIcon,
  CursorClickIcon,
  DeviceMobileIcon,
  AdjustmentsIcon,
  SunIcon,
} from '@heroicons/react/outline';

import benefitOneImg from '../public/img/benefit-one.png';
// import benefitTwoImg from '../public/img/benefit-two.png';

const benefitOne = {
  title: 'Our Services',
  desc: 'Whether you’re just learning to drive a car or an overseas driver wanting to learn the Canadian road rules and Canadian driving conditions, SAS Driving School driving lessons are structured to suit your needs. Our driving instructors are trained to boost your driving ability and create safe driving habits',
  image: benefitOneImg,
  bullets: [
    {
      title: 'Understand your customers',
      desc: 'Then explain the first point breifly in one or two lines.',
      icon: <EmojiHappyIcon />,
    },
    {
      title: 'Improve acquisition',
      desc: 'Here you can add the next benefit point.',
      icon: <ChartSquareBarIcon />,
    },
    {
      title: 'Drive customer retention',
      desc: 'This will be your last bullet point in this section.',
      icon: <CursorClickIcon />,
    },
  ],
};

// const benefitTwo = {
//   title: 'Offer more benefits here',
//   desc: 'You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.',
//   image: benefitTwoImg,
//   bullets: [
//     {
//       title: 'Mobile Responsive Template',
//       desc: 'Nextly is designed as a mobile first responsive template.',
//       icon: <DeviceMobileIcon />,
//     },
//     {
//       title: 'Powered by Next.js & TailwindCSS',
//       desc: 'This template is powered by latest technologies and tools.',
//       icon: <AdjustmentsIcon />,
//     },
//     {
//       title: 'Dark & Light Mode',
//       desc: 'Nextly comes with a zero-config light & dark mode. ',
//       icon: <SunIcon />,
//     },
//   ],
// };

// export { benefitOne, benefitTwo };
export { benefitOne };
