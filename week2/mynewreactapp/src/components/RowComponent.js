export default function RowComponent({ rowItem }) {
  const { image, titleRow, descriptionRow } = rowItem;
  return (
    <div className="item team">
      <img
        alt=" "
        className="image"
        // style={gallery.style}
        src={image}
      />
      <div className="component-title title">{titleRow}</div>
      <div className="description">{descriptionRow}</div>
    </div>
  );
}
