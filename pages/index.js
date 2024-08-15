import React, { useState, useEffect } from "react";
import { getRandomSpotlightPiece, SpotlightMain } from "@/components/Spotlight";
import { StyledButton, StyledHideButton } from "@/public/ButtonStyles";
import { StyledFlexContainer } from "@/styles";
import { useArtPieces } from "@/components/ArtPiecesInfo";

export default function SpotlightPage({ artPieces }) {
  const [spotlightPiece, setSpotlightPiece] = useState(null);
  const { artPiecesInfo, toggleFavoriteStatus } = useArtPieces();

  useEffect(() => {
    if (artPieces && artPieces.length > 0) {
      setSpotlightPiece(getRandomSpotlightPiece(artPieces));
    }
  }, [artPieces]);

  if (artPieces.length === 0) return <div>Loading...</div>;

  const toggleHideButton = () => {
    setSpotlightPiece(null);
<<<<<<< HEAD
  };

  const toggleCreateSpotlightButton = () => {
    if (artPieces.length > 0) {
      setSpotlightPiece(getRandomSpotlightPiece(artPieces));
    }
=======
>>>>>>> task-4
  };

  return (
    <div>
<<<<<<< HEAD
      <StyledFlexContainer>
        <StyledButton onClick={toggleCreateSpotlightButton}>
          Create Spotlight
        </StyledButton>
        <StyledHideButton onClick={toggleHideButton}>
          Hide Spotlight
        </StyledHideButton>
      </StyledFlexContainer>

      {spotlightPiece && (
        <SpotlightMain
          artPieces={[spotlightPiece]}
          isFavorite={artPiecesInfo[spotlightPiece.slug] || false}
          onToggleFavorite={() => toggleFavoriteStatus(spotlightPiece.slug)}
        />
      )}
=======
      {spotlightPiece && <SpotlightMain artPieces={[spotlightPiece]} />}
>>>>>>> task-4
    </div>
  );
}
