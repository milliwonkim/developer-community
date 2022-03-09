import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import { Avatar } from "@material-ui/core";
import firebase from "firebase/app";
import { useStateValue } from "../../reducer/StateProvider";

function Header() {
  const [{ user }, dispatch] = useStateValue();

  const handleSignout = async () => {
    try {
      const response = firebase.auth().signOut();
      if (response) dispatch({});
    } catch (error) {
      console.log("handleSignout error: ", error);
    }
  };

  return (
    <div className="header">
      <div className="header__left">
        <div style={{ fontSize: "40px" }}>💻</div>
        <div className="header__input">
          <SearchIcon />
          <input placeholder="Search Facebook" type="text" />
        </div>
      </div>
      <div className="header__center">
        <div className="header__option header__option--active">
          <HomeIcon fontSize="large" />
        </div>
        <div className="header__option">
          <FlagIcon fontSize="large" />
        </div>
        <div className="header__option">
          <SubscriptionsOutlinedIcon fontSize="large" />
        </div>
        <div className="header__option">
          <StorefrontOutlinedIcon fontSize="large" />
        </div>
        <div className="header__option">
          <SupervisedUserCircleIcon fontSize="large" />
        </div>
      </div>
      <div className="header__right">
        <div className="header__info" onClick={handleSignout}>
          <Avatar src={user.photoURL} />
          <h4>{user.displayName}</h4>
        </div>
      </div>
    </div>
  );
}

export default Header;
