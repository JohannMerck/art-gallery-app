import { useState } from "react";
import Image from "next/image";
import FavoriteButton from "./FavoriteButton";

function ArtPiecePreview({ image, title, artist }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavoriteStatus = () => {
    setIsFavorite((prevIsFavorite) => !prevIsFavorite);
    console.log(`Favorite status for ${title}: ${!isFavorite}`);
  };

  return (
    <div>
      <Image
        src={image}
        alt={title || "Artwork"}
        width={300}
        height={300}
        priority
      />
      <FavoriteButton
        isFavorite={isFavorite}
        onToggleFavorite={toggleFavoriteStatus}
      />

      <h2>{title}</h2>
      <p>{artist}</p>
    </div>
  );
}

export default ArtPiecePreview;
