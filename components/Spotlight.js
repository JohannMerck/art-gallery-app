import React from "react";

export default function Spotlight({ image, artist }) {
  return (
    <div className="spotlight">
      <img src={image} alt={`Artwork by ${artist}`} />
      <h2>{artist}</h2>
    </div>
  );
}

function getRandomSpotlightPiece(artPieces) {
  const randomIndex = Math.floor(Math.random() * artPieces.length);
  return artPieces[randomIndex];
}

// Main component that uses Spotlight
export function SpotlightMain() {
  const artPieces = [
    {
      slug: "orange-red-and-green",
      artist: "Steve Johnson",
      name: "Orange Red and Green Abstract Painting",
      imageSource:
        "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
      year: "2018",
      genre: "Abstract Painting",
      colors: ["#0f5855", "#e6ba15", "#b42011", "#cec4c6", "#d5561f"],
      dimensions: { height: 2432, width: 1920, type: "jpg" },
    },
    // add more art pieces here...
  ];

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
