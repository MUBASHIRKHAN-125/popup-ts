"use strict";
let cardPopup = document.getElementById("popup");
const popupCall = () => {
    cardPopup.classList.add("showPopup");
};
const removePopup = () => {
    cardPopup.classList.remove("showPopup");
};
