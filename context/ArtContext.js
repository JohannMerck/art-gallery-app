import { createContext, useState, useContext, useEffect } from "react";
import useSWR from "swr";

const ArtContext = createContext();

const fetcher = (url) => fetch(url).then((res) => res.json());

export function ArtProvider({ children }) {
  const { data, error } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );
  const [artPieces, setArtPieces] = useState(null);

  useEffect(() => {
    if (data) setArtPieces(data);
  }, [data]);

  return (
    <ArtContext.Provider value={{ artPieces, error }}>
      {children}
    </ArtContext.Provider>
  );
}

export function useArt() {
  return useContext(ArtContext);
}
