import { useState, useEffect } from "react";
import { getRandomSpotlightPiece, SpotlightMain } from "@/components/Spotlight";

export default function SpotlightPage({ artPieces }) {
  const [spotlightPiece, setSpotlightPiece] = useState(null);

  useEffect(() => {
    if (artPieces && artPieces.length > 0) {
      setSpotlightPiece(getRandomSpotlightPiece(artPieces));
    }
  }, [artPieces]);

  if (!artPieces) return <div>Loading...</div>;

  return (
    <div>
      {spotlightPiece && <SpotlightMain artPieces={[spotlightPiece]} />}
    </div>
  );
}
