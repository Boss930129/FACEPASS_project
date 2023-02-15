settingbtn = document.getElementById("settingbtn");
sidebar = document.getElementById("sidebar");
username = document.getElementById("username");
closesidebar = document.getElementById("closesidebar");
settingbtn.addEventListener("click", function () {
  sidebar.classList.add("active");
});
closesidebar.addEventListener("click", function () {
  sidebar.classList.remove("active");
});

chrome.storage.local.get(["users"]).then((result) => {
  for (let i = 0; i < result.users.length; i++) {
    const element = result.users[i];
    console.log(element);
    if (element.active == true) {
      username.innerHTML = element.name;
    }
  }
});
