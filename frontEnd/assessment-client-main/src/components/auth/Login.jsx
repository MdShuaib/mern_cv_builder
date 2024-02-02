import React from 'react';
import { useFormik } from "formik";
import { useState } from "react";
import toast from "react-hot-toast";
import { GoogleLogin } from "react-google-login";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { preLogin } from "../../services/httpService";
import AuthLayout from "../layout/AuthLayout";
import { BeatLoader } from "react-spinners";
import ReCAPTCHA from "react-google-recaptcha";
const Login = () => {
  console.log('key', process.env.REACT_RECAPTCHA_SECRECT_KEY);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const initialValues = {
    email: "",
    password: "",
  };
  const validation = Yup.object({
    email: Yup.string().required(),
    password: Yup.string().required().min(6).max(18),
  });

  const formik = useFormik({
    initialValues,
    validationSchema: validation,
    onSubmit(values) {
      handleApi(values);
    },
  });
  const handleApi = async (payload) => {
    try {
      setLoading(true);
      const res = await preLogin.post("/auth/login", payload);
      if (res?.data?.success) {
        const { token } = res?.data;
        localStorage.setItem("auth_token", token);
        toast.success(res.data?.msg);
        formik.resetForm();
        navigate("/panel/home");
      } else toast.error(res.data?.msg);
      setLoading(false);
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      setLoading(false);
    }
  };

  const responseGoogle = (response) => {
    console.log(response);
  };

  const onChangeCaptcha = () => {
    console.log('Captcha submited');
  };
  return (
    <AuthLayout>
      <main className="auth-main">
        <div className="signin">
          <div className="content">
            <h2>Login</h2>
            <form autoComplete="off" onSubmit={formik.handleSubmit}>
              <div className="form">
                <div className="inputBox ">
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    placeholder="Enter you email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.email && formik.touched.email && (
                    <div className="error"> {formik.errors.email}</div>
                  )}
                </div>
                <div className="inputBox input-icon">
                  <label htmlFor="password">Password</label>
                  <input
                    type={"password"}
                    placeholder="Enter you Password"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                <ReCAPTCHA
                // need to pull our key and paste it in .env file
                  sitekey='6LcFS2MpAAAAACOoqbLUUShQVMejjolMorLcUqCE'
                  onChange={onChangeCaptcha}
                />
                <div className="inputBox">
                  <input
                    type="submit"
                    value={loading ? "Loading..." : "Login"}
                    disabled={loading}
                  />

                  {loading && (
                    <div className="spinner">
                      <BeatLoader color="green" loading={loading} size={15} />
                    </div>
                  )}
                </div>
                <div className="links">
                  New User? <Link to="/auth/signup">Create account</Link>
                </div>
              </div>
              <div className="google-login">
                <GoogleLogin
                  clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                  buttonText="Login with Google"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy={"single_host_origin"}
                />
              </div>
            </form>
          </div>
        </div>
      </main>
    </AuthLayout>
  );
};

export default Login;
