// import Support from "./Support";
import VisionAndMission from "../components/VisionAndMission";
import Services from "../components/Services";
import Team from "../components/Team";
import Join from "../components/Join";


import "./Main.css";

const Main = () => (
  <main className="site-main">
    <VisionAndMission />
    <Services />
    <Team />
    {/* <Support /> */}
    <Join />
  </main>
);

export default Main;
