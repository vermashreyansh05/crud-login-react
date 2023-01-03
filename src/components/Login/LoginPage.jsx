import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import StoreLoginData from "../StoredData/LoginData";
import Base from "../base";

const Login = () => {
  let navigate = useNavigate();
  const [Uemail, setUemail] = useState();
  const [Upass, setUpass] = useState();

  const getLogin = async (e) => {
    try {
      e.preventDefault();
      let Udata = {
        email: Uemail,
        password: Upass,
      };
      const resp = await axios.post(
        `http://localhost:4000/auth/sign_in/`,
        Udata
      );
      console.warn(resp.headers);
      const data = resp.data;
      const headers = resp.headers;
      await StoreLoginData(data, headers);
      navigate("/");
    } catch (error) {
      alert(error.response.data.errors[0]);
    }
  };

  return (
    <>
      <section className="vh-100">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6 text-black">
              <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
                <form style={{ width: "23rem" }}>
                  <h3
                    className="fw-normal mb-3 pb-3"
                    style={{ letterSpacing: "1px" }}
                  >
                    Log in
                  </h3>

                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="form2Example18"
                      className="form-control form-control-lg"
                      onChange={(e) => setUemail(e.target.value)}
                    />
                    <label className="form-label" for="form2Example18">
                      Email address
                    </label>
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      onChange={(e) => setUpass(e.target.value)}
                      type="password"
                      id="form2Example28"
                      className="form-control form-control-lg"
                    />
                    <label className="form-label" for="form2Example28">
                      Password
                    </label>
                  </div>

                  <div className="pt-1 mb-4">
                    <button
                      className="btn btn-info btn-lg btn-block"
                      onClick={getLogin}
                      type="button"
                    >
                      Login
                    </button>
                  </div>

                  <p className="small mb-5 pb-lg-2">
                    <a className="text-muted" href="#!">
                      Forgot password?
                    </a>
                  </p>
                  <p>
                    Don't have an account?{" "}
                    <a href="#!" className="link-info">
                      <Link to="/Register">Register here</Link>
                    </a>
                  </p>
                </form>
              </div>
            </div>
            <div className="col-sm-6 px-0 d-none d-sm-block">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img3.webp"
                alt="Login image"
                className="w-100 vh-100"
                style={{ objectFit: "cover", objectPosition: "left" }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
