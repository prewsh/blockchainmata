import styled from "styled-components"
import Landing from "./components/Landing";
import Navbar from "./components/nav/Navbar"
import Classes from "./components/Classes"
import Teachers from "./components/Teachers";
import Features from "./components/Features";
import Footer from "./components/Footer";

const Container = styled.div`
  height: 100vh;
  ${'' /* overflow: hidden; */}
  ${'' /* position: relative; */}
`;

function App() {
  return (
    
    <Container >
      <Navbar/>
      <Landing/>
      <Classes/>
      <Teachers/>
      <Features/>
      <Footer/>
    </Container>
  );
}

export default App;
