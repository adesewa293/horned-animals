import { useState } from "react";
import "./hornedbeast.css";

function HornedBeast(props) {
  const { title, imageUrl, description } = props;
  const [fav, setFav] = useState(0);

function handleFav() {
   setFav(fav+1);
}


  return (
    <div className="beast-container">
      <h2>{title}</h2>
      <img onClick={handleFav} src={imageUrl} alt={title} title={title} />
      <p>{description}</p>
      <span className="likeButton" onClick={handleFav}>❤️</span> {fav}
    </div>
  );
}

export default HornedBeast;
