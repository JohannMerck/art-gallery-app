import React from "react";
import Image from "next/image";

export function getRandomSpotlightPiece(artPieces) {
  const randomIndex = Math.floor(Math.random() * artPieces.length);
  return artPieces[randomIndex];
}

export default function Spotlight({ image, artist }) {
  return (
    <div>
      <Image
        src={image}
        alt={`Artwork by ${artist}`}
        width={300}
        height={300}
        priority
      />
      <h2>{artist}</h2>
    </div>
  );
}

export function SpotlightMain({ artPieces }) {
  const randomArtPiece = getRandomSpotlightPiece(artPieces);

  return (
    <div>
      <Spotlight
        image={randomArtPiece.imageSource}
        artist={randomArtPiece.artist}
      />
    </div>
  );
}
