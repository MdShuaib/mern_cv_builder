import "../panel/Panel.css";
import Sidebar from "../panel/shared/Sidebar";
import NavBar from "../panel/shared/NavBar";

const PanelLayout = ({ children }) => {
  return (
    <div>
      <div className="grid">
        <NavBar />
        <Sidebar />
        {children}
      </div>
    </div>
  );
};

export default PanelLayout;
