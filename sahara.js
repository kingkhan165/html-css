function display() {
  nav_bar = document.querySelector("#nav_bar1");

  if (nav_bar.style.display == "none") {
    nav_bar.style.display = "block";
  } else {
    nav_bar.style.display = "none";
  }
}
