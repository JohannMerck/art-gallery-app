import ArtPiecePreview from "./ArtPiecePreview";

function ArtPieces({ pieces }) {
  console.log(pieces);

  return (
    <div>
      {pieces.map((piece) => (
        <ArtPiecePreview
          key={piece.slug}
          image={piece.imageSource}
          title={piece.name}
          artist={piece.artist}
        />
      ))}
    </div>
  );
}

export default ArtPieces;
