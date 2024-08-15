import GlobalStyle from "../styles";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import useSWR from "swr";
import { ArtPiecesProvider } from "@/components/ArtPiecesInfo";

const URL = "https://example-apis.vercel.app/api/art";

function App({ Component, pageProps }) {
  const fetcher = (url) => fetch(url).then((res) => res.json());

  const { data, error } = useSWR(URL, fetcher);

  const [artPiecesInfo, setArtPiecesInfo] = useState([]);

  useEffect(() => {
    if (data) {
      setArtPiecesInfo(
        data.map((artPiece) => ({
          slug: artPiece.slug,
          isFavourite: false,
        }))
      );
    }
  }, [data]);

  function handleToggleFavourite(slug) {
    setArtPiecesInfo((prevArtPiecesInfo) =>
      prevArtPiecesInfo.map((artPiece) =>
        artPiece.slug === slug
          ? { ...artPiece, isFavourite: !artPiece.isFavourite }
          : artPiece
      )
    );
  }

  if (!data && !error) return <div>Loading...</div>;
  if (error) return <div>Error loading data...</div>;

  return (
    <ArtPiecesProvider>
      <GlobalStyle />
      <Layout>
        <Component
          {...pageProps}
          artPieces={data}
          artPiecesInfo={artPiecesInfo}
          onToggleFavourite={handleToggleFavourite}
        />
      </Layout>
    </ArtPiecesProvider>
  );
}

export default App;
