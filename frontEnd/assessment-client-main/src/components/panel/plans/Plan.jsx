import { useState } from "react";
import toast from "react-hot-toast";
import { postLogin } from "../../../services/httpService";
import PanelLayout from "../../layout/PaynelLayout";
import "./Plan.css";

const Plan = () => {
  const [loader, setLoader] = useState(false);
  const [selected, setSelected] = useState();
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

  const handleApiCall = async (payload) => {
    try {
      setLoader(true);
      setSelected(payload);

      postLogin.interceptors.request.use(function (config) {
        const token = localStorage.getItem("auth_token");
        config.headers.Authorization = `Bearer ${token}`;
        return config;
      });
      const { data } = await postLogin.post("user/create-payment", payload);
      console.log("data", data);
      if (data?.success) {
        console.log("data", data);
        window.location.href = data?.data?.url;
      }
      setLoader(false);
    } catch (error) {
      setLoader(false);
      toast.error(error?.response?.data?.msg);
      console.log("error", error);
    }
  };

  const renderElement = (el) => {
    console.log(el);
    if(el.id === 'business') {
      return el;
    }
 }
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
                <button type="button" onClick={() => handleApiCall(el)} disabled={loader}>
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
