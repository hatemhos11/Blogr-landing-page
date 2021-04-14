var test = document.getElementsByClassName("haha");

for (var i = 0; i < test.length; i++) {
  test[i].onmouseenter = function () {
    this.lastElementChild.classList.add("toggle");
  };

  test[i].onmouseleave = function () {
    this.lastElementChild.classList.remove("toggle");
  };
}

// 00000000000000000000000

var listIcon = document.getElementById("list-icon");
var mobNav = document.getElementById("mobile-nav");

listIcon.onclick = function(){
  if(mobNav.style.display === "block"){
    mobNav.style.display = "none";
  }else{mobNav.style.display = "block"}

}
