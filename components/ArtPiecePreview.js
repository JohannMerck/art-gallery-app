import React from "react";
import Image from "next/image";
import FavoriteButton from "./FavoriteButton";
import { useArtPieces } from "./ArtPiecesInfo";
import { StyledWrapper } from "@/styles";

function ArtPiecePreview({ image, title, artist, slug }) {
  const { artPiecesInfo, toggleFavoriteStatus } = useArtPieces();
  const isFavorite = artPiecesInfo[slug] || false;

  const handleToggleFavorite = () => {
    toggleFavoriteStatus(slug);
    console.log(`Favorite status for ${title}: ${!isFavorite}`);
  };

  return (
    <div>
      <StyledWrapper>
        <Image
          src={image}
          alt={title || "Artwork"}
          width={500}
          height={500}
          priority
        />
      </StyledWrapper>

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
