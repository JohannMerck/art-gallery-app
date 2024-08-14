import React, { createContext, useState, useContext } from "react";

// Create a context for art pieces info
const ArtPiecesContext = createContext();

// Export the provider component
export function ArtPiecesProvider({ children }) {
  const [artPiecesInfo, setArtPiecesInfo] = useState({});

  // Function to toggle the favorite status of an art piece by its slug
  const toggleFavoriteStatus = (slug) => {
    setArtPiecesInfo((prevState) => ({
      ...prevState,
      [slug]: !prevState[slug], // Toggle the favorite status
    }));
  };

  return (
    <ArtPiecesContext.Provider value={{ artPiecesInfo, toggleFavoriteStatus }}>
      {children}
    </ArtPiecesContext.Provider>
  );
}

// Custom hook to use the ArtPiecesContext
export function useArtPieces() {
  return useContext(ArtPiecesContext);
}
