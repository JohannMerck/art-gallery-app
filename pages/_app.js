import GlobalStyle from "../styles";
import Spotlight from "./Spotlight";
import { SpotlightMain } from "./Spotlight";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />

      <SpotlightMain />
    </>
  );
}
