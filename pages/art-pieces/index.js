import useSWR from "swr";
import ArtPieces from "../../components/ArtPieces";
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ArtPiecesPage() {
  const { data: pieces, error } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  console.log("Art piece data:", pieces);

  if (error) return <div>Failed to load</div>;
  if (!pieces) return <div>Loading...</div>;

  return <ArtPieces pieces={pieces} />;
}
