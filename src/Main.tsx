import VisionAndMission from "./VisionAndMission";
import Services from "./Services";
import Team from "./Team";
// import Support from "./Support";
import Join from "./Join";

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
