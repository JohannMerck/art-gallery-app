import React from "react";
import ArtPiecePreview from "./ArtPiecePreview";

function ArtPieces({ pieces }) {
  return (
    <div>
      {pieces.map((piece) => (
        <ArtPiecePreview
          key={piece.slug}
          slug={piece.slug} // Pass the slug here
          image={piece.imageSource}
          title={piece.name}
          artist={piece.artist}
        />
      ))}
    </div>
  );
}

export default ArtPieces;
