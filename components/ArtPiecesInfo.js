import React, { createContext, useEffect, useContext } from "react";
import useLocalStorageState from "use-local-storage-state";

// Create a context for art pieces info
const ArtPiecesContext = createContext();

// Export the provider component
export function ArtPiecesProvider({ children }) {
  const [artPiecesInfo, setArtPiecesInfo] = useLocalStorageState(
    "artPiecesInfo",
    {
      defaultValue: {},
    }
  );

  useEffect(() => {}, []);

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
