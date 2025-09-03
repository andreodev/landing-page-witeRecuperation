import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Conversion from "./components/Conversion";
import Parceiros from "./components/Parceiros";
import Language from "./components/Language";
import Integration from "./components/Integration.tsx";
import Agent from "./components/Agent";
import WhatsappSection from "./components/WhatsappSection.tsx";
import Perguntas from "./components/Perguntas.tsx";
import IntegrateBanner from "./components/IntegrateBanner";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Parceiros />
      <Conversion />
      <Language />
      <Agent />
      <Integration />
      <WhatsappSection />
      <Perguntas />
      <IntegrateBanner />
      <Footer />
    </>
  );
}

export default App;
