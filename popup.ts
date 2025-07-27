let cardPopup = document.getElementById("popup") as HTMLElement;

const popupCall = () => {
    cardPopup.classList.add("showPopup");
}
const removePopup = () => {
    cardPopup.classList.remove("showPopup");
}