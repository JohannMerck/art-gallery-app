import React from "react";
import Image from "next/image";
import { StyledImageWrapper } from "@/styles";

export function getRandomSpotlightPiece(artPieces) {
  const randomIndex = Math.floor(Math.random() * artPieces.length);
  return artPieces[randomIndex];
}

export default function Spotlight({ image, artist, title }) {
  return (
    <div>
      <Image
        src={image}
        alt={`Artwork by ${artist}`}
        width={500}
        height={500}
        priority
      />
      <p>{artist}</p>
      <h1>{title}</h1>
    </div>
  );
}

export function SpotlightMain({ artPieces }) {
  const randomArtPiece = getRandomSpotlightPiece(artPieces);
  console.log(randomArtPiece);

  return (
    <div>
      <Spotlight
        image={randomArtPiece.imageSource}
        artist={randomArtPiece.artist}
        title={randomArtPiece.name}
      />
    </div>
  );
}
