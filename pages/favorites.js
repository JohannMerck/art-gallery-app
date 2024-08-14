import ArtPieces from "../components/ArtPieces";
import { useArtPieces } from "../components/ArtPiecesInfo";

export default function FavoritesPage({ artPieces }) {
  const { artPiecesInfo } = useArtPieces();
  const favoritePieces = artPieces.filter((piece) => artPiecesInfo[piece.slug]);

  return (
    <div>
      <ArtPieces pieces={favoritePieces} />
    </div>
  );
}
