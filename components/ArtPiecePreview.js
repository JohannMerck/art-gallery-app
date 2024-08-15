import React from "react";
import Image from "next/image";

function ArtPiecePreview({ image, title, artist }) {
  return (
    <div>
      <Image
        src={image}
        alt={title || "Artwork"}
        width={300}
        height={300}
        priority
      />
      <h2>{title}</h2>
      <p>{artist}</p>
    </div>
  );
}

export default ArtPiecePreview;
