import ArtPiecePreview from "./ArtPiecePreview";
<<<<<<< HEAD
=======
import { StyelePieces } from "../styles";

export default function ArtPieces({ pieces }) {
  if (!pieces || pieces.length === 0) {
    return <div>No art pieces available</div>;
  }

  console.log("Art piece data:", pieces);
>>>>>>> task-4

  return (
<<<<<<< HEAD
    <div>
=======
    <StyelePieces>
>>>>>>> task-4
      {pieces.map((piece) => (
        <ArtPiecePreview
          key={piece.slug}
          slug={piece.slug} // Pass the slug here
          image={piece.imageSource}
          title={piece.name}
          artist={piece.artist}
          slug={piece.slug}
        />
      ))}
<<<<<<< HEAD
    </div>
=======
    </StyelePieces>
>>>>>>> task-4
  );
}
