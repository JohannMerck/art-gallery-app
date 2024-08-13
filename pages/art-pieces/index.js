import ArtPieces from "../../components/ArtPieces";

export default function ArtPiecesPage({ artPieces }) {
  return (
    <div>
      <ArtPieces pieces={artPieces} />
    </div>
  );
}
