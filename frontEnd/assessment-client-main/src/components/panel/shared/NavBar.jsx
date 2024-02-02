import { useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { logout } from "../../../app/features/user/userSlice";
import { getUser } from "../../../app/features/user/asyncAction";

const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const store = useSelector((store) => store);
  const user = store?.user?.user?.[0];

  const handleLogout = () => {
    window.localStorage.clear();
    dispatch(logout());
    navigate("auth/login");
  };
  useEffect(() => {
    dispatch(getUser()); // eslint-disable-next-line
  }, []);
  return (
    <header className="header">
      <div className="header__bar">
      </div>
      <div className="user__profle" style={{ position: 'absolute', right: 57, color: 'white' }}>
        <strong>{user?.username}</strong>
      </div>
      <div className="header__avatar" onClick={handleLogout}>
        Logout
      </div>
    </header>
  );
};

export default NavBar;
