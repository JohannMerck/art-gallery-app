import React from "react";
import Image from "next/image";
import FavoriteButton from "./FavoriteButton";
import { useArtPieces } from "./ArtPiecesInfo";

function ArtPiecePreview({ image, title, artist, slug }) {
  const { artPiecesInfo, toggleFavoriteStatus } = useArtPieces();
  const isFavorite = artPiecesInfo[slug] || false;

  const handleToggleFavorite = () => {
    toggleFavoriteStatus(slug);
    console.log(`Favorite status for ${title}: ${!isFavorite}`);
  };

  return (
    <div>
      <Image
        src={image}
        alt={title || "Artwork"}
        width={500}
        height={500}
        priority
      />

      <FavoriteButton
        isFavorite={isFavorite}
        onToggleFavorite={handleToggleFavorite}
      />

      <h2>{title}</h2>
      <p>{artist}</p>
    </div>
  );
}

export default ArtPiecePreview;
