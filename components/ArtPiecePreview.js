import Image from "next/image";
import Link from "next/link";
import { ItemStyle } from "../styles";

function ArtPiecePreview({ image, title, artist, slug }) {
  return (
    <ItemStyle>
      <Link href={`/art-pieces/${slug}`} passHref>
        <Image src={image} alt={title} width={300} height={300} priority />
        <h2>{title}</h2>
        <p>{artist}</p>
      </Link>
    </ItemStyle>
  );
}

export default ArtPiecePreview;
