import HeroSection from "./component/HeroSection";
import Navbar from "./component/Navbar";
import './component/Navbar.css'
import './component/HeroSection.css'
import Section from "./component/Section";
import './component/Section.css'
import SecSection from "./component/SecSection";
import './component/SecSection.css';
import SubBuild from "./component/SubBuild";
import './component/SubBuild.css'
import LootBox from './component/LootBox';
import './component/LootBox.css'
import Assets from './component/Assets'
import './component/Assets.css';
import Team from './component/Team'
import './component/Team.css'
import RoadMap from "./component/RoadMap";
import './component/RoadMap.css'
import Footers from './component/Footers'
import './component/Footers.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Section />
      <SecSection />
      <SubBuild />
      <LootBox />
      <Assets />
      <Team />
      <RoadMap />
      <Footers />
    </div>
  );
}

export default App;
