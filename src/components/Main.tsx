import VisionAndMission from "../components/VisionAndMission";
import Services from "../components/Services";
import Team from "../components/Team";
import OurCoreValues from "../components/OurCoreValues";
import Join from "../components/Join";
import "./Main.css";

const Main = () => (
  <main className="site-main">
    <VisionAndMission />
    <Services />
    <Team />
    <OurCoreValues />
    <Join />
  </main>
);

export default Main;
