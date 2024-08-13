import React from "react";
import ArtPiecePreview from "./ArtPiecePreview";
import { StyledArtPiecesContainer } from "@/styles";

function ArtPieces({ pieces }) {
  return (
    <StyledArtPiecesContainer>
      {pieces.map((piece) => (
        <ArtPiecePreview
          key={piece.slug}
          image={piece.imageSource}
          title={piece.name}
          artist={piece.artist}
        />
      ))}
    </StyledArtPiecesContainer>
  );
}

export default ArtPieces;
