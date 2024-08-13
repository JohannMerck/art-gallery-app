import { useState } from "react";

export default function FavoriteButton(isFavorite, onToggleFavorite) => {
  const [isFavorite, setIsFavorite] = useState(false);
}

function handleFavoriteButton () => {setIsFavorite(!false)}; 

return (
<button onClick={handleFavoriteButton}>Favorite</button>)


