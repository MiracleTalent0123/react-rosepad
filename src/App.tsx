import React from "react";
// import ReactDOM from 'react-dom';
import Footer from "components/Footer";
import View from "components/View";
import styled, { ThemeProvider } from "styled-components";
import themes from "theme";
import GlobalStyles from "theme/Global";

const Container = styled.div.attrs({ id: "body-main" })`
  width: 100vw;
  height: 100vh;
`;

const Main = styled.main.attrs({ id: "maintag" })`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: auto;
`;

function App() {
  const [height, setHeight] = React.useState(0);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleScroll = (e: any) => {
    setHeight(
      ((e.target.scrollTop + e.target.clientHeight) / e.target.scrollHeight) *
        100
    );
  };

  React.useEffect(() => {
    const dom = document.getElementById("maintag")!;
    dom.addEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <React.Fragment>
      <ThemeProvider theme={themes.dark}>
        <GlobalStyles />
        <Container>
          <Main>
            <View height={height} />
            <Footer />
          </Main>
        </Container>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
