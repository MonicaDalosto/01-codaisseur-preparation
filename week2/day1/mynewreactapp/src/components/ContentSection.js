// import SubHeaderComponent from './SubHeaderComponent';
import RowComponent from './RowComponent';
import itemsList from '../listsOfContent/wantsList.json';
import coursesList from '../listsOfContent/coursesList.json';
import whysList from '../listsOfContent/whysList.json';

export default function ContentSection({
  sectionClassName,
  title,
  subtitle,
  description,
  rowItems
}) {
  return (
    <>
      <div className={`section ${sectionClassName}`}>
        <div className="component-section-header">
          <div className="title-badge">
            <div className="title-badge-title">{title}</div>
          </div>

          <h2>
            <div className="component-title ">{subtitle}</div>
          </h2>

          <div className="description">{description}</div>
        </div>

        <div className="component-usp-row">
          {rowItems.map((rowItem, index) => {
            return <RowComponent key={index} rowItem={rowItem} />;
          })}
        </div>
      </div>

      <div className="section-line">
        <div className="line "></div>
      </div>
    </>
  );
}
