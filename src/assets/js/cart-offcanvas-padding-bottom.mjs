// setting cart offcanvas bottom padding so the bottom doesn't overlay the list

export function cartOffcanvasPaddingBottom() {
  setCartOffcanvasPaddingBottom();
}

function setCartOffcanvasPaddingBottom() {
  if (document.getElementById("cartOffcanvasBottom")) {
    let paddingBottom = document.getElementById("cartOffcanvasBottom").offsetHeight;
    document.getElementById("cartOffcanvas").style.paddingBottom = paddingBottom + "px";
  }
}