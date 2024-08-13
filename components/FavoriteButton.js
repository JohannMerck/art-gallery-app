import React from "react";

export default function FavoriteButton({ isFavorite, onToggleFavorite }) {
  return (
    <div>
      <button onClick={onToggleFavorite} style={styles.button}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          style={{
            ...styles.heart,
            fill: isFavorite ? "red" : "none",
            stroke: isFavorite ? "red" : "black",
          }}
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5 2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35z" />
        </svg>
      </button>
    </div>
  );
}

const styles = {
  button: {
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: 0,
  },
  heart: {
    width: 24,
    height: 24,
    transition: "fill 0.3s, stroke 0.3s",
  },
};

// FavoriteButton soll bewirken, dass favorisiertes Bild in Array gespeichert wird, mit ID, name, etc.
