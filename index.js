const fetchSize = () => {
  window.document.querySelector(".displayPixelInfo").innerHTML =
    'CSSピクセル：<span style="font-size:30px;font-weight:bold;">' +
    window.innerWidth +
    '</span>px<br>デバイスピクセル：<span style="font-size:30px;font-weight:bold;">' +
    window.innerWidth * window.devicePixelRatio +
    '</span>px<br>デバイスピクセル比：<span style="font-size:30px;font-weight:bold;">' +
    window.devicePixelRatio;
};
window.addEventListener("resize", () => {
  fetchSize();
});
window.addEventListener("DOMContentLoaded", () => {
  fetchSize();
});
