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
              <StyledSpan>Spotlight</StyledSpan>
            </Link>
          </StyledLi>
          <StyledLi>
            <Link href="/art-pieces">
              <StyledSpan>Pieces</StyledSpan>
            </Link>
          </StyledLi>
        </StyledUlWrapper>
      </StyledNavigationWrapper>
    </nav>
  );
}
