var btn = document.getElementById("menu");
var home = document.getElementById("home");
var hr = document.getElementById("hr");

btn.addEventListener("click", Menu);

function Menu() {
  console.log("connected");
  var link = document.getElementById("link-wrapper");
  if (link.style.display === "flex") {
    link.style.display = "none";
    // home.style.marginTop = "66%";
    hr.style.display = "none";
  } else {
    link.style.display = "flex";
    // home.style.marginTop = "21%";
    hr.style.display = "block";
  }
}
