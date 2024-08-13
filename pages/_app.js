import GlobalStyle from "../styles";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { StyledBody } from "../styles";

const API_URL = "https://example-apis.vercel.app/api/art";

export default function App({ Component, pageProps }) {
  const [artPieces, setArtPieces] = useState([]);

  useEffect(() => {
    async function fetchArtPieces() {
      const response = await fetch(API_URL);
      const data = await response.json();
      setArtPieces(data);
    }
    fetchArtPieces();
  }, []);
  return (
    <div>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} artPieces={artPieces} />
      </Layout>
    </div>
  );
}
