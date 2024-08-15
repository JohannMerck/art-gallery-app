import { useRouter } from "next/router";
import ArtPieceDetails from "../../components/ArtPieceDetails";

export default function ArtPiecePage({ artPiece }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!artPiece) {
    return <div>Art piece not found</div>;
  }

  console.log("Art piece details:", artPiece);

  return <ArtPieceDetails {...artPiece} />;
}

export async function getStaticPaths() {
  const res = await fetch("https://example-apis.vercel.app/api/art");
  const artPieces = await res.json();

  const paths = artPieces.map((piece) => ({
    params: { slug: piece.slug },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const res = await fetch("https://example-apis.vercel.app/api/art");
  const artPieces = await res.json();
  const artPiece = artPieces.find((piece) => piece.slug === params.slug);

  if (!artPiece) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      artPiece,
    },
  };
}
