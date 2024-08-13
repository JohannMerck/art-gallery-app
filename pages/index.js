import React, { useState } from "react";
import useSWR from "swr";
import ArtPieces from "../components/ArtPieces";
import { SpotlightMain, getRandomSpotlightPiece } from "@/components/Spotlight";
import {
  StyledButton,
  StyledHideButton,
  StyledButtonWrapper,
} from "@/public/ButtonStyles";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
  const { data, error } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  const [spotlightPiece, setSpotlightPiece] = useState(null);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  const toggleButtonClick = () => {
    setSpotlightPiece(getRandomSpotlightPiece(data));
  };

  const toggleHideButton = () => {
    setSpotlightPiece(null); // Hide the spotlight by clearing the state
  };

  return (
    <div>
      <ArtPieces pieces={data} />
      <StyledButtonWrapper>
        <StyledButton onClick={toggleButtonClick}>Show Spotlight</StyledButton>
        <StyledHideButton onClick={toggleHideButton}>
          Hide Spotlight
        </StyledHideButton>
      </StyledButtonWrapper>

      {spotlightPiece && <SpotlightMain artPieces={[spotlightPiece]} />}
    </div>
  );
}
