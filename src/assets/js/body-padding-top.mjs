// setting body top padding so the navbar doesn't overlay the content

export function bodyPaddingTop() {
  setBodyPaddingTop();
  addEventListener("resize", (event) => {
    setBodyPaddingTop();
  });
}

function setBodyPaddingTop() {
  if (document.getElementById("header")) {
    let paddingTop = document.getElementById("header").offsetHeight;
    document.body.style.paddingTop = paddingTop + "px";
  }
}