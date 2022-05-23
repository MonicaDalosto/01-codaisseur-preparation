import SubHeaderComponent from './SubHeaderComponent';
import RowComponent from './RowComponent';
import wantsList from '../listsOfContent/wantsList.json';
import coursesList from '../listsOfContent/coursesList.json';
import whysList from '../listsOfContent/whysList.json';
import ContentSection from './ContentSection';

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

const coursesHeader = {
  sectionClassName: 'section-courses-usp',
  title: 'Courses',
  subtitle: 'Our Courses',
  description:
    'We have created courses to help you learn, with easy to follow steps and some sparks of fun!',
  rowItem: [
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
  ]
};
const whysHeader = {
  sectionClassName: 'section-why-usp',
  title: 'Why?',
  subtitle: 'Why do we do this',
  description:
    'It’s really simple actually. We just love to combine our passion for code with our love for teaching. Coding is so much fun when doing it together.',
  rowItem: [
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
      descriptionRow: 'We like to learn and to teach others the stuff we know.'
    }
  ]
};

export default function MainContent() {
  return (
    <>
      <ContentSection
        sectionClassName="section-what-usp"
        title="Do you want to"
        subtitle="Learn how to code"
        description="Awesome! Let’s do this together. We are here to support you in your coding journey."
        rowItems={[
          {
            image: 'https://learntocodetogether.nl/assets/team.svg',
            titleRow: 'Get help from experienced developers'
          },
          {
            image: 'https://learntocodetogether.nl/assets/community.svg',
            titleRow: 'Learn &amp; share with our community'
          },
          {
            image: 'https://learntocodetogether.nl/assets/personal-speed.svg',
            titleRow: 'Personal &amp; at your own speed'
          }
        ]}
      />

      {/* <SectionContent
        sectionClassName={coursesHeader.sectionClassName}
        title={coursesHeader.title}
        subtitle={coursesHeader.subtitle}
        description={coursesHeader.description}
      /> */}

      {/* <div className="section section-courses-usp">
        <SubHeaderComponent
          title={coursesHeader.title}
          subtitle={coursesHeader.subtitle}
          description={coursesHeader.description}
        />
        <div className="component-usp-row"> */}
      {/* {coursesList.map((course, index) => {
            return (
              <RowComponent
                key={index}
                alt={course.alt}
                className={course.className}
                // style={course.styles.map(style)=>{
                // return style.width
                // }}
                src={course.src}
                titleRow={course.titleRow}
              />
            );
          })} */}
      {/* </div>
      </div> */}

      {/* <div className="section-line">
        <div className="line "></div>
      </div> */}

      {/* <div className="section section-why-usp">
        <SubHeaderComponent
          title={whysHeader.title}
          subtitle={whysHeader.subtitle}
          description={whysHeader.description}
        /> */}
      {/* <div className="component-usp-row">
          {whysList.map((why, index) => {
            return (
              // <RowComponent
              //   key={index}
              //   alt={why.alt}
              //   className={why.className}
              //   src={why.src}
              //   titleRow={why.titleRow}
              //   descriptionRow={why.descriptionRow}
              // />
            )
          })}
        </div> */}
      {/* </div> */}

      <div className="section-line">
        <div className="line "></div>
      </div>
    </>
  );
}
