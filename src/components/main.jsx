import React from "react";
import Profile from "./profile/profile"

const Main = props => {
  return (
    <div
      className={
        "main-wrapper" + (props.sidebarActive ? "" : " sidebar-hidden")
      }
    >

      {/* Depending on page passed in props, render corresponding component */}
      {props.page.name === "Profile" && <Profile />}
    </div>

  );
};

export default Main;
