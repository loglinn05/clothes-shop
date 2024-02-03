// making a container take up the rest of the page

export function containerSizing(id = "loading-container") {
  setContainerSize(id);
  addEventListener("resize", (event) => {
    setContainerSize(id);
  });
}

function setContainerSize(id) {
  if (document.getElementById(id)) {
    document.getElementById(id).style.height =
      window.innerHeight - document
        .getElementsByClassName('section-header')[0]
        .offsetHeight + "px";
  }
}