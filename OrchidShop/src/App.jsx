import Header from "./quick/header";
import Footer from "./quick/footer";
import Orchids from "./Orchids/OrchidCard";
import 

import "./Theme/Darkmode.css";
import "./Theme/Lightmode.css";

function App() {
  return (
    <div className="App" data-theme="light">
      <Header />
      <Orchids />
      <Footer />
    </div>
  );
}

export default App;
