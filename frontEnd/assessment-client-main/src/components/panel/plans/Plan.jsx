import { useState } from "react";
import PanelLayout from "../../layout/PaynelLayout";
import "./Plan.css";

const Plan = () => {
  const [loader] = useState(false);
  const [selected] = useState();
  const data = [
    {
      id: "starter",
      title: "Starter",
      amount: '$45',
    },
    {
      id: "professional",
      title: "Professional",
      amount: '$75',
    },
    {
      id: "business",
      title: "Business+",
      amount: "Request pricing for more information",
    },
  ];

  return (
    <PanelLayout>
      <div className="plans">
        <div className="title">
          <h2>Choose Plans</h2>
        </div>
        <div className="plan-container">
          {data?.map((el) => (
            <div className="plan" key={el?.id}>
              <div className="heading">
                <h4>{el?.title}</h4>
                <h3>{el.amount }</h3>
              </div>
              <div className="listing">
                <ul>
                  <li>
                    Teams looking to track assets and create fundamental preventive maintenance schedules with procedures.
                  </li>
                  <li>
                    Teams looking to build efficient and strong preventive maintenance through machine status and manpower visibility.
                  </li>
                  <li>
                    Departments that need to leverage insights and analytics to drive further maintenance growth and productivity.
                  </li>
                  <li>
                    Organizations ready to capture maintenance & operations data to manage multiple locations & system customization.
                  </li>
                </ul>
              </div>
              <div className="button">
                <button type="button"  disabled={loader}>
                  {selected?.id === el?.id
                    ? loader
                      ? "Loading..."
                      : "  Subscribe"
                    : "Subscribe"}
                  {}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PanelLayout>
  );
};

export default Plan;
