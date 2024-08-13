import React, { useState } from "react";
import useSWR from "swr";
import ArtPieces from "../components/ArtPieces";
import { SpotlightMain } from "@/components/Spotlight";
import { StyledButton } from "@/public/ButtonStyles";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
  const { data, error } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  // State to manage the visibility of SpotlightMain
  const [showSpotlight, setShowSpotlight] = useState(false);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  // Function to toggle the SpotlightMain visibility
  const toggleButtonClick = () => {
    setShowSpotlight(!false);
  };

  return (
    <div>
      <ArtPieces pieces={data} />

      <StyledButton onClick={toggleButtonClick}>Show Spotlight</StyledButton>

      {showSpotlight && <SpotlightMain artPieces={data} />}
    </div>
  );
}
