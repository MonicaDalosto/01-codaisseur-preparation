import ContentSection from './ContentSection';

// Const(s) that I am not using for now:
// const wantsHeader = {
//   sectionClassName: 'section-what-usp',
//   title: 'Do you want to',
//   subtitle: 'Learn how to code',
//   description:
//     'Awesome! Let’s do this together. We are here to support you in your coding journey.',
//   rowItem: [
//     {
//       src: 'https://learntocodetogether.nl/assets/team.svg',
//       titleRow: 'Get help from experienced developers'
//     },
//     {
//       src: 'https://learntocodetogether.nl/assets/community.svg',
//       titleRow: 'Learn &amp; share with our community'
//     },
//     {
//       src: 'https://learntocodetogether.nl/assets/personal-speed.svg',
//       titleRow: 'Personal &amp; at your own speed'
//     }
//   ]
// };

// const coursesHeader = {
//   sectionClassName: 'section-courses-usp',
//   title: 'Courses',
//   subtitle: 'Our Courses',
//   description:
//     'We have created courses to help you learn, with easy to follow steps and some sparks of fun!',
//   rowItem: [
//     {
//       src: 'https://learntocodetogether.nl/assets/expand-horizon.svg',
//       titleRow: 'Learn new skills and expand your horizon'
//     },
//     {
//       src: 'https://learntocodetogether.nl/assets/developers.svg',
//       titleRow: 'Follow courses created by experienced developers'
//     },
//     {
//       // styles: { width: '200px' },
//       src: 'https://learntocodetogether.nl/assets/step-by-step.svg',
//       titleRow: 'Fun, hands on and easy to follow'
//     }
//   ]
// };
// const whysHeader = {
//   sectionClassName: 'section-why-usp',
//   title: 'Why?',
//   subtitle: 'Why do we do this',
//   description:
//     'It’s really simple actually. We just love to combine our passion for code with our love for teaching. Coding is so much fun when doing it together.',
//   rowItem: [
//     {
//       src: 'https://learntocodetogether.nl/assets/technology.svg',
//       titleRow: 'Technology',
//       descriptionRow:
//         'We love to experiment and create awesome stuff from the comfort of our couch.'
//     },
//     {
//       src: 'https://learntocodetogether.nl/assets/community.svg',
//       titleRow: 'People',
//       descriptionRow:
//         'It’s always fun to do things together, the excitement and the collaborations.'
//     },
//     {
//       src: 'https://learntocodetogether.nl/assets/personal-speed.svg',
//       titleRow: 'Teaching',
//       descriptionRow: 'We like to learn and to teach others the stuff we know.'
//     }
//   ]
// };

export default function MainContent() {
  return (
    <>
      <ContentSection
        // Using hardcode content:
        sectionClassName="section-what-usp"
        title="Do you want to"
        subtitle="Learn how to code"
        description="Awesome! Let’s do this together. We are here to support you in your coding journey."
        rowItems={[
          {
            src: 'https://learntocodetogether.nl/assets/team.svg',
            titleRow: 'Get help from experienced developers'
          },
          {
            src: 'https://learntocodetogether.nl/assets/community.svg',
            titleRow: 'Learn &amp; share with our community'
          },
          {
            src: 'https://learntocodetogether.nl/assets/personal-speed.svg',
            titleRow: 'Personal &amp; at your own speed'
          }
        ]}

        // Using the const from outside:
        // sectionClassName={wantsHeader.sectionClassName}
        // title={wantsHeader.title}
        // subtitle={wantsHeader.subtitle}
        // description={wantsHeader.description}
        // rowItems={wantsHeader.rowItem}
      />

      <ContentSection
        sectionClassName="section-courses-usp"
        title="Courses"
        subtitle="Our Courses"
        description="We have created courses to help you learn, with easy to follow steps and some sparks of fun!"
        rowItems={[
          {
            src: 'https://learntocodetogether.nl/assets/expand-horizon.svg',
            titleRow: 'Learn new skills and expand your horizon'
          },
          {
            src: 'https://learntocodetogether.nl/assets/developers.svg',
            titleRow: 'Follow courses created by experienced developers'
          },
          {
            // styles: { width: '200px' },
            src: 'https://learntocodetogether.nl/assets/step-by-step.svg',
            titleRow: 'Fun, hands on and easy to follow'
          }
        ]}
      />

      <ContentSection
        sectionClassName="section-why-usp"
        title="Why?"
        subtitle="Why do we do this"
        description="It’s really simple actually. We just love to combine our passion for code with our love for teaching. Coding is so much fun when doing it together."
        rowItems={[
          {
            src: 'https://learntocodetogether.nl/assets/technology.svg',
            titleRow: 'Technology',
            descriptionRow:
              'We love to experiment and create awesome stuff from the comfort of our couch.'
          },
          {
            src: 'https://learntocodetogether.nl/assets/community.svg',
            titleRow: 'People',
            descriptionRow:
              'It’s always fun to do things together, the excitement and the collaborations.'
          },
          {
            src: 'https://learntocodetogether.nl/assets/personal-speed.svg',
            titleRow: 'Teaching',
            descriptionRow:
              'We like to learn and to teach others the stuff we know.'
          }
        ]}
      />
    </>
  );
}
