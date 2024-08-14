import Link from "next/link";
import {
  StyledNavigationWrapper,
  StyledUlWrapper,
  StyledLi,
  StyledSpan,
} from "@/styles";

export default function Navigation() {
  return (
    <nav>
      <StyledNavigationWrapper>
        <StyledUlWrapper>
          <StyledLi>
            <Link href="/">
              <p>Spotlight</p>
            </Link>
          </StyledLi>
          <StyledLi>
            <Link href="/art-pieces">
              <p>Pieces</p>
            </Link>
            <StyledLi>
              <Link href="/favorites">
                <p>Favorites</p>
              </Link>
            </StyledLi>
          </StyledLi>
        </StyledUlWrapper>
      </StyledNavigationWrapper>
    </nav>
  );
}
