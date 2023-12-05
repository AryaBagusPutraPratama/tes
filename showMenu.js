function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    var content = document.querySelector(".content");
  
    if (sidebar.style.width === "250px") {
      sidebar.style.width = "0";
      content.style.marginLeft = "0";
    } else {
      sidebar.style.width = "250px";
      content.style.marginLeft = "250px";
    }
  }
  let arrow = document.querySelectorAll(".icon-link");
    for (let i = 0; i < arrow.length; i++) {
        arrow[i].addEventListener("click", (e) => {
            let arrowParent = e.target.parentElement.parentElement;
            console.log(arrowParent);
            arrowParent.classList.toggle("showMenu");
        });
    }