export default function RowComponent({ rowItem }) {
  const { src, titleRow, descriptionRow } = rowItem;
  return (
    <div className="item team">
      <img
        alt=" "
        className="image"
        // style={gallery.style}
        src={src}
      />
      <div className="component-title title">{titleRow}</div>
      <div className="description">{descriptionRow}</div>
    </div>
  );
}
