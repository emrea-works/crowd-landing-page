import 'App.scss';
import { Header, Footer } from "./Layout";
import WelcomingBanner from "./WelcomingBanner";
import AboutCROWD from "./AboutCROWD";
import Mission from "./Mission";
import Companies from "./Companies";
import CompaniesResponsive from "./CompaniesResponsive";
import Statistics from "./Statistics";
import Strategy from "./Strategy";
import OurSolutions from "./OurSolutions";
import Projects from "./Projects";
import Board from "./Board";
import Groups from "./Groups";
import ContactUs from "./ContactUs";

function App() {
  return (
    <>
      <Header />
      <WelcomingBanner features={[gsap, useGSAP]} />
      <AboutCROWD />
      <Mission />
      <Companies />
      <CompaniesResponsive />
      <Statistics />
      <Strategy />
      <OurSolutions />
      <Projects />
      <Board />
      <Groups />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
