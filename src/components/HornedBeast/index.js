import { useState } from "react";
import "./hornedbeast.css";

function HornedBeast(props) {
  const { title, imageUrl, description, showModal } = props;
  const [fav, setFav] = useState(0);

function handleFav() {
   setFav(fav+1);
}
function handleClick() {
  showModal()
}


  return (
    <div className="beast-container">
      <h2>{title}</h2>
      <img onClick={handleClick} src={imageUrl} alt={title} title={title} />
      <p>{description}</p>
      <span className="likeButton" onClick={handleFav}>❤️</span> {fav}
    </div>
  );
}

export default HornedBeast;
