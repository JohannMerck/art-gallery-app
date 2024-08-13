import { useState, useEffect } from "react";
import { getRandomSpotlightPiece, SpotlightMain } from "@/components/Spotlight";
import { StyledButton, StyledHideButton } from "@/public/ButtonStyles";

export default function SpotlightPage({ artPieces }) {
  const [spotlightPiece, setSpotlightPiece] = useState(null);

  useEffect(() => {
    if (artPieces && artPieces.length > 0) {
      setSpotlightPiece(getRandomSpotlightPiece(artPieces));
    }
  }, [artPieces]);

  if (!artPieces) return <div>Loading...</div>;

  const toggleHideButton = () => {
    setSpotlightPiece(null); // Hide the spotlight by clearing the state
  };

  const toggleCreateSpotlightButton = () => {
    setSpotlightPiece(getRandomSpotlightPiece(artPieces));
  };

  return (
    <div>
      <StyledButton onClick={toggleCreateSpotlightButton}>
        Create Spotlight
      </StyledButton>
      <StyledHideButton onClick={toggleHideButton}>
        Hide Spotlight
      </StyledHideButton>
      {spotlightPiece && <SpotlightMain artPieces={[spotlightPiece]} />}
    </div>
  );
}
