import "../auth/Auth.css";

const AuthLayout = ({ children }) => {
  return (
    <>
      <div className="auth-container">
        <div className="auth-layout">
          <aside className="auth-aside">
          </aside>
          {children}
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
