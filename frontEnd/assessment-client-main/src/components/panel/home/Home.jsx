import { useDispatch, useSelector } from "react-redux";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllResume } from "../../../app/features/resume/asyncAction";
import { setEditMode } from "../../../app/features/resume/resumeSlice";
import { getUser } from "../../../app/features/user/asyncAction";
import temp1Img from "../../../assets/resume-temp-1.png";
import { planSetter } from "../../../utils/planSetter";
import PanelLayout from "../../layout/PaynelLayout";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Img01 from '../../../assets/carousel1.png';
import Img02 from '../../../assets/carousel2.png'
import Img03 from '../../../assets/carousel3.png'
import Img04 from '../../../assets/carousel4.png'


const images = [
  Img01,
  Img02,
  Img03,
  Img04
];

const Home = () => {
  const store = useSelector((store) => store);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState([]);

  const resume = store?.resume?.savedResume;
  const user = store?.user?.user?.[0];

  const handleView = (el) => {
    setOpen(true);
    setSelected(el);
  };
  const handleEdit = (el) => {
    dispatch(setEditMode(el));
    navigate(`/panel/editor?resume_id=${el?._id}`);
  };

  useEffect(() => {
    dispatch(getAllResume());
    dispatch(getUser()); // eslint-disable-next-line
  }, []);
  return (
    <PanelLayout>
      <main className="main">
        <div className="main-overview">
          <div className="overviewCard">
            <div className="overviewCard-icon overviewCard-icon--document">
              <i className="far fa-file-alt"></i>
            </div>
            <div className="overviewCard-description">
              <h3 className="overviewCard-title">
                Total <strong>Document</strong>
              </h3>
              <p className="overviewCard-subtitle">{resume?.length}</p>
            </div>
          </div>
          <br />
          <div className="overviewCard">
            <div className="overviewCard-icon overviewCard-icon--mail"></div>
            <div className="overviewCard-description">
              <h3 className="overviewCard-title">
                Recent <strong>Documents</strong>
              </h3>
              <p className="overviewCard-subtitle">4</p>
            </div>
          </div>
          <div className="overviewCard">
            <div className="overviewCard-icon overviewCard-icon--photo"></div>
            <div className="overviewCard-description">
              <h3 className="overviewCard-title ">
                Number <strong>Download</strong>
              </h3>
              <p className="overviewCard-subtitle">{user?.download}</p>
            </div>
          </div>
        </div>
        <Carousel useKeyboardArrows={true}>
        {images.map((URL, index) => (
          <div className="slide">
            <img alt="sample_file" src={URL} key={index} />
          </div>
        ))}
      </Carousel>
      </main>
    </PanelLayout>
  );
};

export default Home;
