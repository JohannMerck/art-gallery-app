import ArtPiecePreview from "./ArtPiecePreview";

export default function ArtPieces({ pieces }) {
  if (!pieces || pieces.length === 0) {
    return <div>No art pieces available</div>;
  }

  console.log("Art piece data:", pieces);

  return (
    <div>
      {pieces.map((piece) => (
        <ArtPiecePreview
          key={piece.slug}
          image={piece.imageSource}
          title={piece.name}
          artist={piece.artist}
          slug={piece.slug}
        />
      ))}
    </div>
  );
}
