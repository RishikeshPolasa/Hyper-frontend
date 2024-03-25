"use client";
import React, { useState } from "react";
import "./style.css";
import storeLogo from "../../Icons/storeLogo.png";
import SearchIcon from "@/Icons/SearchIcon";
import AccountIcon from "@/Icons/AccountIcon";
import CartIcon from "@/Icons/CartIcon";
import Popup from "../Popup/index";

export default function Header() {
  const handlePopup = (e) => {
    console.log("clicked");
  };
  const handleChange = (e) => {
    console.log("e", e.target.value);
  };
  return (
    <div className="headerAndIcons">
      <div className="logoAndInput">
        <div className="logoName">Hyper Market</div>
        <div className="inputWrapper">
          <input
            className="input"
            onChange={handleChange}
            placeholder="Search Product"
          />
          <div className="searchIconWrp">
            <SearchIcon className="searchIcon" />
          </div>
        </div>
      </div>
      <div className="iconsWrapper">
        <div className="accountIconWrp" onClick={(e) => handlePopup(e)}>
          <AccountIcon className="accountIcon" />
          <div className="text">Account</div>
        </div>
        <div className="cartIconWrp">
          <CartIcon className="cartIcon" />
          <div className="text">Cart</div>
        </div>
      </div>
      {/* <Popup isOpen={isPopupOpen} popupName="Login" /> */}
    </div>
  );
}
