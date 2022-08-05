const widthWebIdx = document.documentElement.clientWidth;
if (widthWebIdx <= 654) {
  document.getElementById("userMenuLeftIdx").style.width = "100%";
  document.getElementById("userMenuRightIdx").style.display = "none";
  const displayMenuUserLeft = window.getComputedStyle(
    document.getElementById("userMenuLeftIdx")
  ).display;
  const displayMenuUserRight = window.getComputedStyle(
    document.getElementById("userMenuRightIdx")
  ).display;
}
if (document.getElementById("menuBarFxAdmin")) {
  const widthMenuAdminFixBar =
    document.getElementById("menuBarFxAdmin").clientWidth;
}
