var acc = document.getElementsByClassName("accordion"),
mainPanel = document.querySelector(".main-panel"),
i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      console.log(mainPanel.style.scrollHeight + " main Acc height");
      console.log(panel.scrollHeight + " panel.scrollHeight");
      mainPanel.style.maxHeight = mainPanel.scrollHeight + panel.scrollHeight + "px";
    } 
  });
}
