import Image from "next/image";
import { StyledFavoriteButton } from "@/public/ButtonStyles";
import { StyledArtPiecesContainer } from "@/styles";

function ArtPiecePreview({ image, title, artist }) {
  return (
    <div>
      <StyledArtPiecesContainer>
        <Image
          src={image}
          alt={title || "Artwork"}
          width={300}
          height={300}
          priority
        />
      </StyledArtPiecesContainer>
      <h2>{title}</h2>
      <p>{artist}</p>
    </div>
  );
}

export default ArtPiecePreview;
