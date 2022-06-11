const tabs = document.querySelectorAll(".tab");
const tabsContent = document.querySelectorAll(".tabContent");
const tabsBlock = document.querySelector(".tabsBlock");

tabsBlock.addEventListener("click", changeTabContent);
window.addEventListener("load", () => {
  tabs[0].classList.add("selected");
  tabsContent[0].classList.add("active");
});

function changeTabContent(event) {
  let target = event.target;
  if (
    target.classList.contains("tab") & !target.classList.contains("selected")
  ) {
    for (let i = 0; i < tabs.length; i++) {
      if (target == tabs[i]) {
        changeSelectedTab(i);
        break;
      }
    }
  }
}

function changeSelectedTab(tab_idnex) {
  for (let i = 0; i < tabs.length; i++) {
    if (i != tab_idnex) {
      tabs[i].classList.remove("selected");
      tabsContent[i].classList.remove("active");
    } else {
      tabs[i].classList.add("selected");
      tabsContent[i].classList.add("active");
    }
  }
}
