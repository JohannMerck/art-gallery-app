import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ItemStyle } from "../styles";
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
    <ItemStyle>
      <Link href={`/art-pieces/${slug}`} passHref>
        <Image
          src={image}
          alt={title || "Artwork"}
          width={300}
          height={300}
          priority
        />
        <h2>{title}</h2>
        <p>{artist}</p>
      </Link>
      <FavoriteButton
        isFavorite={isFavorite}
        onToggleFavorite={handleToggleFavorite}
      />
    </ItemStyle>
  );
}

export default ArtPiecePreview;
