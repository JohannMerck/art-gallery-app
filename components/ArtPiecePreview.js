import { useState } from "react";
import Image from "next/image";
import FavoriteButton from "./FavoriteButton";

function ArtPiecePreview({ image, title, artist }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavoriteStatus = () => {
    setIsFavorite((prevIsFavorite) => !prevIsFavorite);
    console.log(`Favorite status for ${title}: ${!isFavorite}`);
  };

  const artPiecesInfo = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="m12 21.35-1.45-1.32C5.4 15.36 2 12.27 2 8.5 2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35Z" />
    </svg>
  );

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
