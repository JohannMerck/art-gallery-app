import React from "react";
import Image from "next/image";
import CommentForm from "./CommentForm";
import { useState } from "react";
import { CommentsDisplay } from "./CommentForm";

export function getRandomSpotlightPiece(artPieces) {
  const randomIndex = Math.floor(Math.random() * artPieces.length);
  return artPieces[randomIndex];
}

export default function Spotlight({ image, artist, title }) {
  return (
    <div>
      <Image
        src={image}
        alt={`Artwork by ${artist}`}
        width={500}
        height={500}
        priority
      />
      <p>{artist}</p>
      <h1>{title}</h1>
    </div>
  );
}

// SpotlightMain Component
export function SpotlightMain({ artPieces }) {
  const [comments, setComments] = useState([]);
  const randomArtPiece = getRandomSpotlightPiece(artPieces);

  function handleCommentSubmit(newComment) {
    setComments((prevComments) => [...prevComments, newComment]);
  }

  return (
    <div>
      <Spotlight
        image={randomArtPiece.imageSource}
        artist={randomArtPiece.artist}
        title={randomArtPiece.name}
      />
      <CommentForm onCommentSubmit={handleCommentSubmit} />
      <CommentsDisplay comments={comments} />
    </div>
  );
}
