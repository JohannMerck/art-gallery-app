import useSWR from "swr";
import ArtPieces from "../components/ArtPieces";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
  const { data, error } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return <ArtPieces pieces={data} />;
}
