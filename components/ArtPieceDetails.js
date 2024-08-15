import Image from "next/image";
import { ItemDetails } from "../styles";

function ArtPieceDetails({ imageSource, name, artist, year, genre }) {
  console.log("Art piece data:", { imageSource, name, artist, year, genre });

  return (
    <ItemDetails>
      <Image
        src={imageSource}
        alt={name || "Art piece"}
        width={400}
        height={400}
        priority
      />
      <h1>{name}</h1>
      <p>Artist: {artist}</p>
      <p>Year: {year}</p>
      <p>Genre: {genre}</p>
    </ItemDetails>
  );
}

export default ArtPieceDetails;
