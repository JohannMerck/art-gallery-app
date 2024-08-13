import GlobalStyle from "../styles";

import { SpotlightMain } from "../components/Spotlight";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />

      <SpotlightMain />
    </>
  );
}
