function HornedBeast(props) {
  const { title, imageUrl, description } = props;
  return (
    <div>
      <h2>{title}</h2>
      <img src={imageUrl} alt={title} title={title} />
      <p>{description}</p>
    </div>
  );
}

export default HornedBeast;
