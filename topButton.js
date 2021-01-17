const topButton = document.querySelector(".js-topButton");

const HIDE_CN = "topButton__hide";

let beforeYPos = 0;

const handleScroll = () => {
  const currentYPos = window.pageYOffset;

  if (currentYPos < 300) {
    topButton.classList.add(HIDE_CN);
  } else if (currentYPos < beforeYPos) {
      topButton.classList.remove(HIDE_CN);
  } else {
      topButton.classList.add(HIDE_CN);
  }
  beforeYPos = currentYPos;
};

const init = () => {
  window.addEventListener("scroll", handleScroll);
};

init();
