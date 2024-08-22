// SIDEBAR DROPDOWN
const allDropdown = document.querySelectorAll("#sidebar .side-dropdown");
const sidebar = document.getElementById("sidebar");

allDropdown.forEach((item) => {
  const a = item.parentElement.querySelector("a:first-child");
  a.addEventListener("click", function (e) {
    e.preventDefault();

    if (!this.classList.contains("active")) {
      allDropdown.forEach((i) => {
        const aLink = i.parentElement.querySelector("a:first-child");

        aLink.classList.remove("active");
        i.classList.remove("show");
      });
    }

    this.classList.toggle("active");
    item.classList.toggle("show");
  });
});

// SIDEBAR COLLAPSE
const toggleSidebar = document.querySelector("nav .toggle-sidebar");
const allSideDivider = document.querySelectorAll("#sidebar .divider");

if (sidebar.classList.contains("hide")) {
  allSideDivider.forEach((item) => {
    item.textContent = "-";
  });
  allDropdown.forEach((item) => {
    const a = item.parentElement.querySelector("a:first-child");
    a.classList.remove("active");
    item.classList.remove("show");
  });
} else {
  allSideDivider.forEach((item) => {
    item.textContent = item.dataset.text;
  });
}

toggleSidebar.addEventListener("click", function () {
  sidebar.classList.toggle("hide");

  if (sidebar.classList.contains("hide")) {
    allSideDivider.forEach((item) => {
      item.textContent = "-";
    });

    allDropdown.forEach((item) => {
      const a = item.parentElement.querySelector("a:first-child");
      a.classList.remove("active");
      item.classList.remove("show");
    });
  } else {
    allSideDivider.forEach((item) => {
      item.textContent = item.dataset.text;
    });
  }
});

sidebar.addEventListener("mouseleave", function () {
  if (this.classList.contains("hide")) {
    allDropdown.forEach((item) => {
      const a = item.parentElement.querySelector("a:first-child");
      a.classList.remove("active");
      item.classList.remove("show");
    });
    allSideDivider.forEach((item) => {
      item.textContent = "-";
    });
  }
});

sidebar.addEventListener("mouseenter", function () {
  if (this.classList.contains("hide")) {
    allDropdown.forEach((item) => {
      const a = item.parentElement.querySelector("a:first-child");
      a.classList.remove("active");
      item.classList.remove("show");
    });
    allSideDivider.forEach((item) => {
      item.textContent = item.dataset.text;
    });
  }
});

// PROFILE DROPDOWN
// const profile = document.querySelector('nav .profile');
// const imgProfile = profile.querySelector('img');
// const dropdownProfile = profile.querySelector('.profile-link');

// imgProfile.addEventListener('click', function () {
// 	dropdownProfile.classList.toggle('show');
// })

// MENU
const allMenu = document.querySelectorAll("main .content-data .head .menu");

allMenu.forEach((item) => {
  const icon = item.querySelector(".icon");
  const menuLink = item.querySelector(".menu-link");

  icon.addEventListener("click", function () {
    menuLink.classList.toggle("show");
  });
});

// window.addEventListener('click', function (e) {
// 	if(e.target !== imgProfile) {
// 		if(e.target !== dropdownProfile) {
// 			if(dropdownProfile.classList.contains('show')) {
// 				dropdownProfile.classList.remove('show');
// 			}
// 		}
// 	}

// 	allMenu.forEach(item=> {
// 		const icon = item.querySelector('.icon');
// 		const menuLink = item.querySelector('.menu-link');

// 		if(e.target !== icon) {
// 			if(e.target !== menuLink) {
// 				if (menuLink.classList.contains('show')) {
// 					menuLink.classList.remove('show')
// 				}
// 			}
// 		}
// 	})
// })

//DARKMODE

// var checkbox = document.querySelector("input[name=theme]");

// let trans = () => {
//   document.documentElement.classList.add("transition");
//   window.setTimeout(() => {
//     document.documentElement.classList.remove("transition");
//   }, 1000);
// };

// checkbox.addEventListener("change", function () {
//   if (this.checked) {
//     trans();
//     document.documentElement.setAttribute("data-theme", "dark");
//     // Almacenar la opción del usuario en el local storage
//     window.localStorage.setItem("theme", "dark");
//   } else {
//     trans();
//     document.documentElement.setAttribute("data-theme", "light");
//     // Almacenar la opción del usuario en el local storage
//     window.localStorage.setItem("theme", "light");
//   }
// });


// // PREVISUALIZAR IMG
// function previewImage() {
//   var preview = document.querySelector("#preview");
//   var file = document.querySelector("#imagenJuego").files[0];
//   var reader = new FileReader();

//   reader.addEventListener(
//     "load",
//     function () {
//       preview.src = reader.result;
//     },
//     false
//   );

//   if (file) {
//     reader.readAsDataURL(file);
//   }
// }
