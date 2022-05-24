const SubHeaderComponent = props => {
  return (
    <div className="component-section-header">
      <div className="title-badge">
        <div className="title-badge-title">{props.title}</div>
      </div>

      <h2>
        <div className="component-title ">{props.subtitle}</div>
      </h2>

      <div className="description">{props.description}</div>
    </div>
  );
};

export default SubHeaderComponent;
