import { Header, Footer } from "./Layout";
import WelcomingBanners from "./sections/WelcomingBanners";
import AboutCROWD from "./sections/AboutCROWD";
import Mission from "./sections/Mission";
import Companies, { CompaniesResponsive } from "./sections/Companies";
import Statistics from "./sections/Statistics";
import Strategy from "./sections/Strategy";
import OurSolutions from "./sections/OurSolutions";
import Projects from "./sections/Projects";
import Board from "./sections/Board";
import Groups from "./sections/Groups";
import ContactUs from "./sections/ContactUs";

function App() {
  return (
    <>
      <Header />
      <WelcomingBanners />
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
