import React from "react";
import Footer from "components/Footer";
import View from "components/View";
import { ThemeProvider } from "styled-components";
import themes from "theme";
import GlobalStyles from "theme/Global";

function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={themes.dark}>
        <GlobalStyles />
        <View />
        <Footer />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
