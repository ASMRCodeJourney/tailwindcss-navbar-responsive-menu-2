//Menu components
const btn_components = document.getElementById("components");
const sub_menu_components = document.getElementById("sub-menu-components");

//Menu Ecosystem
const btn_ecosystem = document.getElementById("ecosystem");
const sub_menu_ecosystem = document.getElementById("sub-menu-ecosystem");

//Menu mobile
const btn_mobile = document.getElementById("btn-mobile");
const menu_mobile = document.getElementById("menu-mobile");
const menu_right = document.getElementById("menu-right");

document.addEventListener("click", (e) => {
  if (btn_components.contains(e.target)) {
    btn_components.classList.add("components-show");
    sub_menu_components.classList.toggle("hidden");
  } else {
    if (btn_components.classList.contains("components-show")) {
      btn_components.classList.remove("components-show");
      sub_menu_components.classList.add("hidden");
    }
  }

  if (btn_ecosystem.contains(e.target)) {
    btn_ecosystem.classList.add("ecosystem-show");
    sub_menu_ecosystem.classList.toggle("hidden");
  } else {
    if (btn_ecosystem.classList.contains("ecosystem-show")) {
      btn_ecosystem.classList.remove("ecosystem-show");
      sub_menu_ecosystem.classList.add("hidden");
    }
  }

  if (btn_mobile.contains(e.target)) {
    if (btn_mobile.classList.contains("mobile-show")) {
      btn_mobile.classList.remove("mobile-show");
      menu_mobile.classList.add("hidden");
      menu_right.classList.toggle("hidden");
    } else {
      btn_mobile.classList.add("mobile-show");
      menu_mobile.classList.toggle("hidden");
      menu_right.classList.toggle("hidden");
      menu_right.classList.add("flex");
    }
  }
});
