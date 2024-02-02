import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import AboutInput from "./AboutInput";
import EducationInput from "./EducationInput";
import SkillInput from "./SkillInput";
import SocialInput from "./SocialInput";

const Inputs = () => {
  const [key, setKey] = useState("about");
  return (
    <div>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3 text-dark"
      >
        <Tab eventKey="about" title="Basic Details">
          <AboutInput />
        </Tab>
        <Tab eventKey="education" title="Education">
          <EducationInput inUse="education" />
        </Tab>
        <Tab eventKey="experience" title="Experience">
          <EducationInput inUse="experience" />
        </Tab>
        <Tab eventKey="skills" title="Skills">
          <SkillInput />
        </Tab>
        <Tab eventKey="social" title="Social">
          <SocialInput />
        </Tab>
      </Tabs>
    </div>
  );
};

export default Inputs;
