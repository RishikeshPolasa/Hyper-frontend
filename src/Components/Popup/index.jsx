import React from "react";
import CloseIcon from "@/Icons/CloseIcon";
import "./style.css";
export default function index({ popupName, isOpen, onClose, children }) {
  return (
    isOpen && (
      <div className="popupWrapper">
        <div className="popupWrp">
          <div className="nameAndBtn">
            <div className="popupName">{popupName}</div>
            <div className="closeIconWrp" onClick={onClose}>
              <CloseIcon className="closeIcon" />
            </div>
          </div>
          {children}
        </div>
      </div>
    )
  );
}
