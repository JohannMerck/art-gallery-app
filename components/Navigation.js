import Link from "next/link";
import {
  StyledNavigationWrapper,
  StyledUlWrapper,
  StyledLi,
  StyledSpan,
  StyledPiecesSpan,
  StyledFavoritesSpan,
} from "@/styles";

export default function Navigation() {
  return (
    <nav>
      <StyledNavigationWrapper>
        <StyledUlWrapper>
          <StyledLi>
            <Link href="/">
              <StyledSpan>Spotlight</StyledSpan>
            </Link>
          </StyledLi>
          <StyledLi>
            <Link href="/art-pieces">
              <StyledPiecesSpan>Pieces</StyledPiecesSpan>
            </Link>
          </StyledLi>
          <StyledLi>
            <Link href="/favorites">
              <StyledFavoritesSpan>Favorites</StyledFavoritesSpan>
            </Link>
          </StyledLi>
        </StyledUlWrapper>
      </StyledNavigationWrapper>
    </nav>
  );
}
