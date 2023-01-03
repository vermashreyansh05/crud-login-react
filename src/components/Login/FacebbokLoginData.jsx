import { render } from "@testing-library/react";
import React from "react";
import FacebookLogin from "react-facebook-login";

const responseFacebook = (response) => {
  console.log("login Response", response);
};

const componentClicked = (data) => {
  console.warn("fb data", data);
};

export default function FacebookLoginData() {
  debugger;
  render();
  return (
    <>
      <FacebookLogin
        appId="634144771647416"
        autoLoad={true}
        fields="name,email,picture"
        callback={responseFacebook}
        onClick={componentClicked}
        cssClass="my-facebook-button-class"
        icon={<TiSocialFacebookCircular />}
      />
      ,
    </>
  );
}
