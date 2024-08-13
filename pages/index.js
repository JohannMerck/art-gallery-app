import React, { useState } from "react";
import useSWR from "swr";
import ArtPieces from "../components/ArtPieces";
import { SpotlightMain } from "@/components/Spotlight";
import { StyledButton } from "@/public/ButtonStyles";
import { getRandomSpotlightPiece } from "@/components/Spotlight";

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

  return (
    <div>
      <ArtPieces pieces={data} />

      <StyledButton onClick={toggleButtonClick}>Show Spotlight</StyledButton>

      {spotlightPiece && <SpotlightMain artPieces={[spotlightPiece]} />}
    </div>
  );
}
